import {Handlers} from "$fresh/server.ts";
import web3 from '../../utils/web3.ts'
import {config} from "../../utils/config.ts";
import {calculator_abi, calculator_bytecode} from "../../utils/config.ts";

// Session
import { WithSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";
export type Data = { session: Record<string, string> };

export const handler: Handlers<Data, WithSession> = {
    async POST(req, ctx) {

        const body = await req.json();
        const contract = body.contract;
        if(ctx.state.session.get(contract) !== undefined) {
            return new Response(JSON.stringify({address: ctx.state.session.get(contract)}), {status:200});
        }

        const address = await deploy();
        ctx.state.session.set(contract, address);
        return new Response(JSON.stringify({address: address}), {status:200})
    },
};

const deploy = async () => {
    console.log(`Attempting to deploy from account ${config.address}`);

    // 6. Create contract instance
    const incrementer = new web3.eth.Contract(calculator_abi);

    // 7. Create constructor tx
    const incrementerTx = incrementer.deploy({
        data: calculator_bytecode,
    });

    // 8. Sign transacation and send
    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            data: incrementerTx.encodeABI(),
            gas: await incrementerTx.estimateGas(),
        },
        config.privateKey
    );

    // 9. Send tx and wait for receipt
    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
    return createReceipt.contractAddress;
};