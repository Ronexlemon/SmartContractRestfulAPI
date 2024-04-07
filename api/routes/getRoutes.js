const express = require("express");
const router = express.Router();
const { ethers } = require("ethers");

const contractAbi = require("../constant/simpleAbi.json")
require('dotenv').config({path:".env"})

const SimpleContractAddress = process.env.SimpleContractAddress;
const RPC_URL = process.env.RPC_URL;
const KEY = process.env.KEY;

const provider = new ethers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");
//const signer  = new ethers.Wallet(KEY,provider);

const contractInstance  = new ethers.Contract(SimpleContractAddress,contractAbi , provider);


function convertBigIntsToStrings(obj) {
    // Iterate through the object properties
    for (let key in obj) {
        if (typeof obj[key] === 'bigint') {
            // Convert BigInt to string
            obj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object') {
            // If the property is an object, recursively convert BigInts to strings
            obj[key] = convertBigIntsToStrings(obj[key]);
        }
    }
    return obj;
}


router.get("/companyDetail/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await contractInstance.getCompanyById(id);
       // Convert BigInts to strings in the result array
    const convertedResult = result.map(item => {
        if (typeof item === 'bigint') {
            return item.toString();
        }
        return item;
    });

    res.status(200).json({ data: convertedResult, msg: "success" });
    } catch (error) {
        console.log("the error",error)
        res.status(500).json({ msg: error });
    }
});

router.get("/allcompanyDetails",async(req,res)=>{
    
    try{
        
        const result = await contractInstance.getAllCompanies();
      // Function to recursively convert BigInts to strings
    const convertBigIntToString = (value) => {
        if (typeof value === 'bigint') {
            return value.toString();
        }
        if (Array.isArray(value)) {
            return value.map(convertBigIntToString);
        }
        return value;
    };

    // Convert BigInts to strings in each inner array
    const convertedResult = result.map(convertBigIntToString);

    res.status(200).json({ data: convertedResult, msg: "success" });
    }catch(error){
        console.log("the error",error)
        res.status(500).json({msg:error});
    }

})
module.exports = router;
