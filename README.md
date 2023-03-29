# Blockchain GCC

## Made with

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Deno](https://deno.land/)
- [Deno Fresh](https://fresh.deno.dev/)
- [Hardhat](https://hardhat.org/)

## Usage

```
docker compose up -d --build --force-recreate
```
- It will deploy a local blockchain with 10 accounts and 10000 ETH each.
- You can access the blockchain at http://localhost:8545
- You can access to the web app at http://localhost:8000 and can deploy 3 example contracts

## Structure

```bash
.
├── chain
│   ├── Dockerfile
│   ├── hardhat.config.ts
│   └── package.json
├── docker-compose.yml
├── README.md
└── web
    ├── components
    │   └── Header.tsx
    ├── deno.json
    ├── deno.lock
    ├── dev.ts
    ├── Dockerfile
    ├── fresh.gen.ts
    ├── import_map.json
    ├── islands
    │   ├── Contract.tsx
    │   └── FaucetForm.tsx
    ├── main.ts
    ├── README.md
    ├── routes
    │   ├── api
    │   │   ├── check.ts
    │   │   ├── deploy.ts
    │   │   └── faucet.ts
    │   ├── contracts.tsx
    │   ├── faucet.ts
    │   ├── index.tsx
    │   └── _middleware.tsx
    ├── static
    │   ├── ethereum-logo.svg
    │   ├── favicon.ico
    │   ├── logo_gcc.svg
    │   ├── logo_gcc_white.svg
    │   └── logo.svg
    ├── twind.config.ts
    └── utils
        ├── codes.ts
        ├── config.ts
        ├── contracts_config.ts
        ├── soljson.js
        └── web3.ts
```

### Hardhat
Chain configuration is a basic hardhat project with a dockerfile to build the image.

**hardhat.config.ts**
```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    networks: {
        hardhat: {
            blockGasLimit: 100000000429720,
            chainId: 1337,
        }
    }
};

export default config;
```
We just increased the blockGasLimit to deploy contract without problems. And we set the chainId to 1337 for people using MetaMask.

### Web

#### Basics

Web app is a Fresh Deno project with Server Side Rendering, File System Routing and Tailwind CSS.
Just some basics concepts :
- **components** : JSX components rendered by the server
- **islands** : JSX components rendered by the client to enable interactivity (React state, etc...)
- **routes** : File System Routing (/api/deploy.tsx -> /api/deploy)
- **static** : Static files (images, css, js, etc...)
- **utils** : Some utils functions (Web3 Instance, Contract ABI, Contract bytecode, Contract code)

#### Routes

- `/ (index.tsx)` : Home page, nothing to do with this page
- `/faucet (faucet.ts)` : Faucet page, you can request some ETH to the faucet.
- `/contracts (contracts.tsx)` : Contracts page, you can deploy 3 example contracts. It will deploy the contract, and then you can interact with it. You have Contract islands to deploy display a contract in th page like this:
```typescript
<Contract contract={"reentrancy"} title={"Re-Entrancy"} code={reentrancy_code} check={false}/>
// contract : Name of the contract, it has to be the same as the name of the contract in the /api/deploy.ts file.
// title : Title of the contract, it will be displayed in the page.
// code : Contract code, it will be displayed in the page.
// check : Enable checker, will only works with public variable solved
```
- `/api/deploy (api/deploy.ts)` : Deploy a contract with the name given in params, you can change switch case to deploy your own contract. The name in the switch has to be the same as the contract name in *contracts.tsx*
- `/api/check (api/check.ts)` : Check solve for contracts with public variable solved.
- `/api/faucet (api/faucet.ts)` :  It will send 1 ETH to the address you provide.
- `(_middleware.tsx)` : It configures session with Fresh Session. It allows us to store an address for each user like:
```
"contract1" : "0x987...0550"
"contract2" : "0x870...9874"
"contract3" : "0x057...6871"
```
Accessible with `ctx.state.session.get("contract1")`.

#### Islands

- `Contract.tsx` : Contract island allows to display code, name and make two requests (deploy and check if enabled)
- `FaucetForm.tsx` : Form island to make a request to */api/faucet* to give 1 ETH to provided address

#### Components

- `Header.tsx` :  Header to navigate through the app

### TODO

[ ] -  Auto-deploy smart contract in web app