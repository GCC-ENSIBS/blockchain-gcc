import Web3 from "https://deno.land/x/web3/mod.ts";
import web3 from "./web3.ts";

export const config = {
    address: "0x057811f544b04D04731b7Fd553fb6e5346C7e2A8",
    privateKey: "0xeafc63c173454a1b412c3a1d5a32c718c50eb71dcf88ee76386b14d166ede4ec",

}

export const calculator_bytecode = "0x608060405234801561001057600080fd5b50610281806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063165c4a161461003b5780638c12d8f01461006b575b600080fd5b61005560048036038101906100509190610113565b61009c565b6040516100629190610162565b60405180910390f35b61008560048036038101906100809190610113565b6100b2565b60405161009392919061017d565b60405180910390f35b600081836100aa91906101d5565b905092915050565b60008082846100c19190610217565b915082846100cf91906101d5565b90509250929050565b600080fd5b6000819050919050565b6100f0816100dd565b81146100fb57600080fd5b50565b60008135905061010d816100e7565b92915050565b6000806040838503121561012a576101296100d8565b5b6000610138858286016100fe565b9250506020610149858286016100fe565b9150509250929050565b61015c816100dd565b82525050565b60006020820190506101776000830184610153565b92915050565b60006040820190506101926000830185610153565b61019f6020830184610153565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101e0826100dd565b91506101eb836100dd565b92508282026101f9816100dd565b915082820484148315176102105761020f6101a6565b5b5092915050565b6000610222826100dd565b915061022d836100dd565b9250828201905080821115610245576102446101a6565b5b9291505056fea2646970667358221220a2b8a56b2828b66d79ae6ebc66bae5e895048a3709363516c6682cd50b759d5c64736f6c63430008120033"
export const calculator_abi = [
    {
        "inputs":
            [
                {
                    "internalType": "uint256",
                    "name": "num1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "num2",
                    "type": "uint256"
                }
            ],
        "name": "arithmetics",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "sum",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "product",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "num1", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "num2",
            "type": "uint256"
        }],
        "name": "multiply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "pure",
        "type": "function"
    }]