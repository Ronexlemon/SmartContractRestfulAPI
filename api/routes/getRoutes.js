const express = require("express");
const router = express.Router();
const { ethers } = require("ethers");

const contractAbi = require("../constant/simpleAbi.json")
require('dotenv').config({path:".env"})

const SimpleContractAddress = process.env.SimpleContractAddress;
const RPC_URL = process.env.RPC_URL;
const KEY = process.env.KEY;

const provider = new ethers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");
console.log(provider);

const contractInstance  = new ethers.Contract(SimpleContractAddress,contractAbi , provider);





router.get("/companyDetail/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await contractInstance.getCompanyById(id);
        res.status(200).json({ data: result, msg: "success" });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

router.get("/allcompanyDetails",async(req,res)=>{
    
    try{
        
        const result = await contractInstance.getAllCampanies();
        res.status(200).json({ data: result, msg: "success" });
    }catch(error){
        res.status(500).json({msg:error});
    }

})
module.exports = router;
