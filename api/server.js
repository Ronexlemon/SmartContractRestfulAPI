const express = require("express");
const { ethers } = require("ethers");

const Port = 3000;
const App = express();

App.use(express.json());

App.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
