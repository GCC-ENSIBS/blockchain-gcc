// This key is publicly known from Hardhat's documentation
// Do not use it for real tx
export const config = {
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    privateKey: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
}

export const lucky_abi = [
    {
        "inputs": [],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "consecutiveWins",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "isSolve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "guess",
                "type": "uint256"
            }
        ],
        "name": "play",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "solved",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const reentrancy_abi = [{
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "balances",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {"inputs": [], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function"}, {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]


export const lucky_bytecode = "60806040526000600260006101000a81548160ff021916908315150217905550426000819055506108d0806100356000396000f3fe60806040526004361061003f5760003560e01c8063143af9071461004457806351fb92cd146100815780636898f82b146100be578063799320bb146100da575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610464565b610105565b60405161007891906104aa565b60405180910390f35b34801561008d57600080fd5b506100a860048036038101906100a39190610464565b61011d565b6040516100b591906104e0565b60405180910390f35b6100d860048036038101906100d39190610527565b610199565b005b3480156100e657600080fd5b506100ef6103ee565b6040516100fc91906104e0565b60405180910390f35b60016020528060005260406000206000915090505481565b6000600a600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610182576001600260006101000a81548160ff0219169083151502179055505b600260009054906101000a900460ff169050919050565b670de0b6b3a764000034146101e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101da906105b1565b60405180910390fd5b60008114806101f25750600181145b610231576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102289061061d565b60405180910390fd5b6000805433444260405160200161024b94939291906106a6565b6040516020818303038152906040528051906020012060001c905060006002826102759190610723565b90506000838214610293576103e83461028e9190610783565b610295565b345b905060003373ffffffffffffffffffffffffffffffffffffffff16826040516102bd906107e5565b60006040518083038185875af1925050503d80600081146102fa576040519150601f19603f3d011682016040523d82523d6000602084013e6102ff565b606091505b5050905080610343576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033a90610846565b60405180910390fd5b84831461035157600061039d565b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039c9190610866565b5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836000819055505050505050565b600260009054906101000a900460ff1681565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061043182610406565b9050919050565b61044181610426565b811461044c57600080fd5b50565b60008135905061045e81610438565b92915050565b60006020828403121561047a57610479610401565b5b60006104888482850161044f565b91505092915050565b6000819050919050565b6104a481610491565b82525050565b60006020820190506104bf600083018461049b565b92915050565b60008115159050919050565b6104da816104c5565b82525050565b60006020820190506104f560008301846104d1565b92915050565b61050481610491565b811461050f57600080fd5b50565b600081359050610521816104fb565b92915050565b60006020828403121561053d5761053c610401565b5b600061054b84828501610512565b91505092915050565b600082825260208201905092915050565b7f4c61206d69736520646f6974206574726520646520312065746865722e000000600082015250565b600061059b601d83610554565b91506105a682610565565b602082019050919050565b600060208201905081810360008301526105ca8161058e565b9050919050565b7f566f757320646576657a20646576696e65722030206f7520312e000000000000600082015250565b6000610607601a83610554565b9150610612826105d1565b602082019050919050565b60006020820190508181036000830152610636816105fa565b9050919050565b6000819050919050565b61065861065382610491565b61063d565b82525050565b60008160601b9050919050565b60006106768261065e565b9050919050565b60006106888261066b565b9050919050565b6106a061069b82610426565b61067d565b82525050565b60006106b28287610647565b6020820191506106c2828661068f565b6014820191506106d28285610647565b6020820191506106e28284610647565b60208201915081905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061072e82610491565b915061073983610491565b925082610749576107486106f4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061078e82610491565b915061079983610491565b9250826107a9576107a86106f4565b5b828204905092915050565b600081905092915050565b50565b60006107cf6000836107b4565b91506107da826107bf565b600082019050919050565b60006107f0826107c2565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b6000610830601483610554565b915061083b826107fa565b602082019050919050565b6000602082019050818103600083015261085f81610823565b9050919050565b600061087182610491565b915061087c83610491565b925082820190508082111561089457610893610754565b5b9291505056fea2646970667358221220084b4aab7a76ebbeee58b2b2ecdcfdbfbcb7170c8f23f418d948286b3f95318864736f6c63430008130033"
export const reentrancy_bytecode = "608060405234801561001057600080fd5b50610490806100206000396000f3fe6080604052600436106100345760003560e01c806327e235e3146100395780633ccfd60b14610076578063d0e30db01461008d575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b91906102ad565b610097565b60405161006d91906102f3565b60405180910390f35b34801561008257600080fd5b5061008b6100af565b005b6100956101f3565b005b60006020528060005260406000206000915090505481565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081116100ff57600080fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516101259061033f565b60006040518083038185875af1925050503d8060008114610162576040519150601f19603f3d011682016040523d82523d6000602084013e610167565b606091505b50509050806101ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a2906103b1565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102419190610400565b92505081905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061027a8261024f565b9050919050565b61028a8161026f565b811461029557600080fd5b50565b6000813590506102a781610281565b92915050565b6000602082840312156102c3576102c261024a565b5b60006102d184828501610298565b91505092915050565b6000819050919050565b6102ed816102da565b82525050565b600060208201905061030860008301846102e4565b92915050565b600081905092915050565b50565b600061032960008361030e565b915061033482610319565b600082019050919050565b600061034a8261031c565b9150819050919050565b600082825260208201905092915050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b600061039b601483610354565b91506103a682610365565b602082019050919050565b600060208201905081810360008301526103ca8161038e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061040b826102da565b9150610416836102da565b925082820190508082111561042e5761042d6103d1565b5b9291505056fea2646970667358221220b09337d513652ba7dace113b68b607972093d4d81ebefb27ddc3b3a85dcf2f4b64736f6c637828302e382e32302d646576656c6f702e323032332e332e32352b636f6d6d69742e35646266613934300059"