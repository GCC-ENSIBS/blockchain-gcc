import {Handlers} from "$fresh/server.ts";
import web3 from '../../utils/web3.ts'
import {
    bienvenue_abi, bienvenue_bytecode,
    config,
    lucky_abi,
    lucky_bytecode,
    reentrancy_abi,
    reentrancy_bytecode
} from "../../utils/config.ts";

// Session
import { WithSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";
export type Data = { session: Record<string, string> };

export const handler: Handlers<Data, WithSession> = {
    async POST(req, ctx) {
        // Parse Body
        const body = await req.json();
        const contract = body.contract;

        // If the contract is already deployed, return the address
        if(ctx.state.session.get(contract) !== undefined) {
            return new Response(JSON.stringify({address: ctx.state.session.get(contract)}), {status:200});
        }

        let address = "";

        // Deploy the contract
        switch(contract) {
            case "lucky":
                address = await deploy(lucky_abi, lucky_bytecode);
                ctx.state.session.set(contract, address);
                break;
            case "reentrancy":
                address = await deploy(reentrancy_abi, reentrancy_bytecode);
                ctx.state.session.set(contract, address);
                break;
            case "bienvenue":
                address = await deploy(bienvenue_abi, bienvenue_bytecode)
                ctx.state.session.set(contract, address)
                break;
        }

        return new Response(JSON.stringify({address: address}), {status:200})
    },
};

const deploy = async (abi: any, bytecode: any) => {
    console.log(`Attempting to deploy from account ${config.address}`);

    const incrementer = new web3.eth.Contract(abi);
    const incrementerTx = incrementer.deploy({
        data: bytecode,
    });

    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            from: config.address,
            data: incrementerTx.encodeABI(),
            gas: await incrementerTx.estimateGas(),
        },
        config.privateKey
    )

    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
    return createReceipt.contractAddress;
}