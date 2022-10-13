require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 
const { POLYGONSCAN_KEY, MUMBAI_ALCHEMY_API_URL, RINKEBY_POCKET_API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    mumbai: {
      url: MUMBAI_ALCHEMY_API_URL,
      accounts: [PRIVATE_KEY]
    },
    rinkeby: {
      url: RINKEBY_POCKET_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey:{
      polygonscan: POLYGONSCAN_KEY,
      rinkeby: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "mumbai",
        chainId: 80001,
        urls: {
          apiURL: "https://api-testnet.polygonscan.com/api",
          browserURL: "https://mumbai.polygonscan.com/"
        }
      },
      {
        network: "rinkeby",
        chainId: 4,
        urls: {
          apiURL: "https://api-rinkeby.etherscan.io/api",
          browserURL: "https://rinkeby.etherscan.io"
        }
      }
    ]
  }
};
