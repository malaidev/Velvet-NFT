// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const signers = await ethers.getSigners();
  console.log("Deploying from ", signers[0].address);
  
  // We get the contract to deploy
  const VelvetNFT = await ethers.getContractFactory('VelvetNFT');
  //await velvetNFT.deploy();
  const velvetNFT = await upgrades.deployProxy(VelvetNFT, { kind: 'uups' });
  
  await velvetNFT.deployed();

  console.log("VelvetNFT deployed to:", velvetNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
