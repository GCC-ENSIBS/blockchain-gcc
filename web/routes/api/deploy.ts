import {Handlers} from "$fresh/server.ts";
import web3 from '../../utils/web3.ts'
import {config, lucky_abi, lucky_bytecode, randomgame_abi, randomgame_bytecode} from "../../utils/config.ts";

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
                address = await deployLucky();
                ctx.state.session.set(contract, address);
                break;
            case "randomgame":
                address = await deployRandomgame();
                ctx.state.session.set(contract, address);
                break;
        }

        return new Response(JSON.stringify({address: address}), {status:200})
    },
};

const deployLucky = async () => {
    console.log(`Attempting to deploy from account ${config.address}`);

    const incrementer = new web3.eth.Contract(lucky_abi);

    const incrementerTx = incrementer.deploy({
        data: lucky_bytecode,
    });

    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            data: incrementerTx.encodeABI(),
            gas: await incrementerTx.estimateGas(),
        },
        config.privateKey
    );

    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
    return createReceipt.contractAddress;
};

const deployRandomgame = async () => {
    console.log(`Attempting to deploy from account ${config.address}`);

    const incrementer = new web3.eth.Contract(randomgame_abi);
    const incrementerTx = incrementer.deploy({
        data: randomgame_bytecode,
    });

    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            from: config.address,
            data: incrementerTx.encodeABI(),
            gas: await incrementerTx.estimateGas(),
        },
        config.privateKey
    )

    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction)
    console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
    return createReceipt.contractAddress;
};