import { ethers } from 'hardhat';

async function main() {
    const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1M tokens with 18 decimals

    const Token = await ethers.getContractFactory('MyToken');
    const token = await Token.deploy(initialSupply);

    await token.deployed();

    console.log('Token Contract Deployed at:', token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
