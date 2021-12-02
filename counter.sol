// SPDX-License-Identifier: MIT 
pragma solidity >=0.7.4;
contract FirstContract {
  // public variable which maintains the counter  
  int public count = 0;
  function incr() public {
    count++;
  }
  function decr() public {
    count--;
  }
  // view function are read only functions 
  function display() public view returns (int) {
    return count; 
  }
}
