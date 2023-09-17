const hre = require("hardhat");

async function main() {
	const Contract = await hre.ethers.getContractFactory("UMKM");
	const contract = await Contract.deploy(1000);

	await contract.deployed();

	console.log("UMKM deployed to:", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});