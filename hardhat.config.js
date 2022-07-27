require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("./scripts/deploy.js");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.DEV_PRIVATE_KEY],
    },
  },
  gasReporter: {
    enabled: true,
    currency: "BRL",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
};
