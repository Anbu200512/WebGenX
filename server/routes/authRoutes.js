import express from "express";

const router = express.Router();

router.post("/login",(req,res)=>{

const {email,password} = req.body;

if(
email === process.env.ADMIN_EMAIL &&
password === process.env.ADMIN_PASSWORD
){
return res.json({success:true,role:"admin"});
}

return res.json({success:false});

});

export default router;