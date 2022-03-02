// https://eth-ropsten.alchemyapi.io/v2/xjoobcqyK4RCzmLaC7w_00fUd-_O_Ae6

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/xjoobcqyK4RCzmLaC7w_00fUd-_O_Ae6",
      accounts: [
        "3f08d97163658329327b651f6df1b5c92290540a4850fc9b98c98cf6173aaaa4",
      ],
    },
  },
};
