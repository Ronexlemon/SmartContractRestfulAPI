const express = require("express");
const router = express.Router();

const { ethers } = require("ethers");

const contractAbi = require("../constant/simpleAbi.json")
require('dotenv').config({path:".env"})

const SimpleContractAddress = process.env.SimpleContractAddress;
const RPC_URL = process.env.RPC_URL;
const KEY = process.env.KEY;

const provider = new ethers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");
const signer  = new ethers.Wallet(KEY,provider);

const contractInstance  = new ethers.Contract(SimpleContractAddress,contractAbi,signer);


router.post("/create", async (req, res) => {
    try {
        const {_numberOfEmployees,_annualRevenue, _companyName, _isRegistered} = req.body;
        const tx = await contractInstance.createCompany(_numberOfEmployees,_annualRevenue,_companyName,_isRegistered);
        await tx.wait();
        res.status(200).json({ data:tx.hash,msg: "success company creation" });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

router.post("/allcompanyDetails",async(req,res)=>{
    try{
        
        res.status(200).json({msg:"success"});
    }catch(error){
        res.status(500).json({msg:error});
    }

})
module.exports = router;
