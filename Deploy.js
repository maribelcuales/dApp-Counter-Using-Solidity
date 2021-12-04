const fs = require('fs');
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); 

// bytecode and abi are files built during the compilation of .sol script
// bin is a compact binary representation of the compiled bytecode  
const bytecode = fs.readFileSync('build/counter_sol_FirstContract.bin');

// abi is a JSON file that describes the deployed contract and its functions
// it allows us to contextualize the contract and call its functions  
const abi = JSON.parse(fs.readFileSync('build.counter_sol.FirstContract.abi'));

// we will get the contract address once deployed which we will be using to interact from web3.js 
(async function () {
  const ganacheAccounts = await web3.eth.getAccounts();
  const myWalletAddress = ganacheAccounts[0];
  const myContract = new web3.eth.Contract(abi);
  myContract.deploy({
    data: bytecode.toString()
  }).send({
    from: myWalletAddress,
    gas: 5000000
  }).then((deployment) => {
    console.log('Voting was successfully deployed!');
    console.log('Voting can be interfaced with at this address:');
    console.log(deployment.options.address);
  }).catch((err) => {
    console.log(err); 
  });
}) ();
