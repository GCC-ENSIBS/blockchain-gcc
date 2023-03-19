import {Handlers} from "$fresh/server.ts";
import web3 from '../../utils/web3.ts'

// Session
import { WithSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";
export type Data = { session: Record<string, string> };

export const handler: Handlers<Data, WithSession> = {
    async POST(req, ctx) {

        const body = await req.json();
        const address = body.address;

        const response = await giveETH();
        return new Response(JSON.stringify({address: address}), {status:200})
    },
};

const giveETH = async (address) => {
    const accounts = await web3.eth.getAccounts();
    await web3.eth.sendTransaction({
        from: accounts[0],
        to: address,
        value: web3.utils.toWei('1', 'ether')
    });
    return address;
};