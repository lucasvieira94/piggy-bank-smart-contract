require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("./scripts/deploy.js");
require("./scripts/transfer.js");
require("./scripts/stake.js");
require("./scripts/balance.js");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.OWNER_PRIVATE_KEY, process.env.USER1_PRIVATE_KEY],
    },
  },
  gasReporter: {
    enabled: true,
    currency: "BRL",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
