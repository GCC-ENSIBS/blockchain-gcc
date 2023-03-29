import { WithSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";
import { Handlers } from "$fresh/server.ts";
import web3 from "../../utils/web3.ts";
import {bienvenue_abi, lucky_abi} from "../../utils/config.ts";
export type Data = { session: Record<string, string> };

export const handler: Handlers<Data, WithSession> = {
    async POST(req, ctx) {
        const body = await req.json();
        const contract = body.contract;


        if (contract === null) {
            return new Response("No contract specified", { status: 400 });
        }

        const address = ctx.state.session.get(contract);
        if (address === undefined) {
            return new Response("Contract not deployed", { status: 400 });
        }

        console.log(`Checking solve for contract ${contract} at address ${address}`)

        let solved = false;
        let flag = "";

        switch (contract) {
            case "lucky":
                solved = await check(address, lucky_abi);
                flag = "flag{y0u_g0t_lucky}";
                break;
            case "bienvenue":
                solved = await check(address, bienvenue_abi);
                flag = "flag{welc0me_t0_web3}";
                break;
        }

        if(solved) {
            return new Response(JSON.stringify({ isSolved: solved, flag: flag }), { status: 200 });
        }

        return new Response(JSON.stringify({ isSolved: solved }), { status: 200 });
    }
}

const check = async (contractAddress: string, contractABI: any) => {
    console.log(`Checking solve for contract ${contractAddress}`);

    const contract = new web3.eth.Contract(contractABI, contractAddress);
    let solved = false;

    try {
        const solved = await contract.methods.solved().call();
        console.log('Solved: ', solved, ' : for contract : ', contractAddress);
    } catch (error) {
        console.error('Error:', error, ' : for contract : ', contractAddress);
    }

    return solved;
}