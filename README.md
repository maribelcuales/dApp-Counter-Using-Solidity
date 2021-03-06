# dApp-Counter-Using-Solidity

## About the Project

This is a basic counter **dApp** which will have an increment and decrement function. It is built using **Solidity** and **Web3.js**. 

## dApp 

**dApp** stands for decentralized application. It is a software application that runs on blockchain which is a distributed or decentralized network.   

## Technologies 

**Solidity** is a high-level and contract-oriented language used for writing Smart Contracts. It is used for designing and implementing Smart Contracts within the Ethereum Virtual Machine (EVM) and other blockchain platforms. 

**Web3.js** is a collection of libraries that allow us to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket. It allows to do certain actions such as retrieving user accounts, sending transactions, interactacting with smart contracts, etc.

## Step by Step: 

1. `npm` install **Ganache**, **Web3.js**, and **Solcjs**
```gitbash  
npm install -g ganache-cli 
npm install -g web3 
npm install -g solc  
```

2. Create the following files: `counter.html`, `counter.js`, `counter.sol`

3. Write the first Smart Contract in `Counter.sol`.

4. Compile code using solc. This will create the `build` folder.
```
solcjs --bin --abi -o ./build counter.sol
```

5. Start Ganache with this command: 
```
  ganache-cli
```

6. Write script in `Deploy.js` to deploy our local server.  

7. Command to deploy: 
```
node counter.js
```


