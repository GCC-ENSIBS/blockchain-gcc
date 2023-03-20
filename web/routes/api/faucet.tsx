import {Handlers} from "$fresh/server.ts";
import web3 from '../../utils/web3.ts'

// Session
import { WithSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";
export type Data = { session: Record<string, string> };

export const handler: Handlers<Data, WithSession> = {
    async POST(req, _ctx) {

        const body = await req.json();
        const address = body.address;

        const response = await giveETH(address);
        return new Response(JSON.stringify({response: response}), {status:200})
    },
};

const giveETH = async (address: string) => {
    const gasPrice = await web3.eth.getGasPrice();
    const accounts = await web3.eth.getAccounts();
    await web3.eth.sendTransaction({
        from: accounts[0],
        to: address,
        value: web3.utils.toWei('1', 'ether'),
        gas: gasPrice
    });
    return "ETH sent to " + address;
};