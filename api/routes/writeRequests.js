const express = require("express");
const router = express.Router();

router.post("/companyDetail/:id", async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ data: id, msg: "success" });
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
