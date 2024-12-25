### 1 create a hardhat project

#### 1 install

`npm i hardhat`

#### 2 create a project

`npx hardhat init <name>`

### 2 compile

`npx hardhat compile`

### 3 create another solidity file

#### 1 copy Lock.sol

change another version
ex) solidity 0.8.1;

#### 2 error happens

-> because it has no compiler

### 4 set hardhat.config.ts

set solidity MultiSolcUserConfig

```
solidity: {
    compilers: [{ version: "0.8.28" }, { version: "0.8.1" }],
  },
```
