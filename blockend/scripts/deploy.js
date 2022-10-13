const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  // Deploy the contract
  const DeCloudContract = await ethers.getContractFactory("DeCloud");
  const deployedDeCloudContract = await DeCloudContract.deploy(10);
  
  await deployedDeCloudContract.deployed();

  // print the address of the deployed contract
  console.log(
    "DeCloud Contract Address:",
    deployedDeCloudContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
