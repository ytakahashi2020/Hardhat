import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.28" }, { version: "0.8.1" }],
  },
};

export default config;
