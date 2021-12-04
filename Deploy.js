const fs = require('fs');
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); 

// bytecode and abi are files built during the compilation of .sol script 
const bytecode = fs.readFileSync('build/counter_sol_FirstContract.bin');

// abi is a JSON file that describes the deployed contract and its functions 
const abi = JSON.parse(fs.readFileSync('build.counter_sol.FirstContract.abi'));

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
