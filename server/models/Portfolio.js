import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({

title: {
type: String,
required: true
},

description: {
type: String
},

image: {
type: String
},

link: {
type: String
},

category: {
type: String
},

createdAt: {
type: Date,
default: Date.now
}

});

export default mongoose.model("Portfolio", portfolioSchema);
