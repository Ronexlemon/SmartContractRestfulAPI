const express = require("express");
const { ethers } = require("ethers");
const getRequests = require("../api/routes/getRoutes")

const Port = 3000;
const App = express();

App.use(express.json());

App.use("/api",getRequests);


App.get("/cmp",async(req,res)=>{
    try{
        
        res.status(200).json({msg:"success"});
    }catch(error){
        res.status(500).json({msg:error});
    }

})

App.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
