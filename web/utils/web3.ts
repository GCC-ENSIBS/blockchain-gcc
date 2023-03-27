import Web3 from "npm:web3";
import {config} from "./config.ts";

const web3 = new Web3(new Web3.providers.HttpProvider("http://blockchain.gcc-ensibs.fr:8545"))
const account = web3.eth.accounts.privateKeyToAccount(config.privateKey);
web3.eth.accounts.wallet.add(account);

// test connection, exit if fail
web3.eth.net.isListening()
    .then(() => console.log('web3 is connected'))
    .catch(e => {
        console.log('web3 is not connected');
        Deno.exit(1);
    });

export default web3;