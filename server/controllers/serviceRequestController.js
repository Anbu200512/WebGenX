import ServiceRequest from "../models/ServiceRequest.js";

/* CREATE REQUEST */

export const createRequest = async (req,res)=>{

try{

const request = new ServiceRequest(req.body);

await request.save();

res.status(201).json({message:"Request saved"});

}catch(err){

res.status(500).json({error:"Server error"});

}

};


/* GET ALL REQUESTS */

export const getRequests = async (req,res)=>{

const requests = await ServiceRequest.find().sort({createdAt:-1});

res.json(requests);

};


/* ACCEPT REQUEST */

export const acceptRequest = async (req,res)=>{

await ServiceRequest.findByIdAndUpdate(
req.params.id,
{status:"Accepted"}
);

res.json({message:"Request accepted"});

};


/* DELETE REQUEST */

export const deleteRequest = async (req,res)=>{

await ServiceRequest.findByIdAndDelete(req.params.id);

res.json({message:"Request deleted"});

};