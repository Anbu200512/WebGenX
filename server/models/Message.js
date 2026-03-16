import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

name: String,

email: String,

message: String,

status: {
type: String,
default: "pending"
},

createdAt: {
type: Date,
default: Date.now
}

});

export default mongoose.model("Message", messageSchema);
