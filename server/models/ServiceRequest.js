import mongoose from "mongoose";

const serviceRequestSchema = new mongoose.Schema({

name:String,
email:String,
phone:String,
websiteType:String,
budget:String,
timeline:String,
description:String,

status:{
type:String,
default:"Pending"
},

createdAt:{
type:Date,
default:Date.now
}

});

export default mongoose.model("ServiceRequest",serviceRequestSchema);