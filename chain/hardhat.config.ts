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