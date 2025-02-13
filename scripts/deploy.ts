import { ethers } from "hardhat";

async function main() {
    const initialSupply = ethers.parseUnits("1000000", 18); // 1M tokens with 18 decimals

    const token = await ethers.deployContract("MyToken", [initialSupply]);

    await token.waitForDeployment();

    console.log("Token Contract Deployed at:" + token.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
