const { ethers, upgrades } = require('hardhat');
const { expect } = require('chai');


describe('VelvetNFT', function () {

  var velvetNFT;

  it('deploys', async function () {
    const VelvetNFT = await ethers.getContractFactory('VelvetNFT');
    //await velvetNFT.deploy();
    velvetNFT = await upgrades.deployProxy(VelvetNFT, { kind: 'uups' });

    await velvetNFT.deployed();
  });

  it('has correct params', async function () {
    expect(await velvetNFT.name()).equals("VelvetNFT");
    expect(await velvetNFT.symbol()).equals("vvNFT");
  })
});