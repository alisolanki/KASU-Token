import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("KASU", function () {
  it("Test KASU contract", async function () {
    const ContractFactory = await ethers.getContractFactory("KASU");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();

    expect(await instance.name()).to.equal("KASU");
  });
});
