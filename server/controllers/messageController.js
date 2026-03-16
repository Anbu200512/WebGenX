import Message from "../models/Message.js";

// CREATE MESSAGE (Contact Form)
export const createMessage = async (req, res) => {

try {


const msg = new Message(req.body);

const saved = await msg.save();

res.json(saved);


} catch (error) {


res.status(500).json({ error: error.message });


}

};

// GET ALL MESSAGES
export const getMessages = async (req, res) => {

try {


const messages = await Message.find().sort({ createdAt: -1 });

res.json(messages);

} catch (error) {


res.status(500).json({ error: error.message });


}

};

// ACCEPT MESSAGE
export const acceptMessage = async (req, res) => {

try {


const updated = await Message.findByIdAndUpdate(

  req.params.id,

  { status: "accepted" },

  { new: true }

);

res.json(updated);


} catch (error) {


res.status(500).json({ error: error.message });


}

};

// REJECT MESSAGE
export const rejectMessage = async (req, res) => {

try {


const updated = await Message.findByIdAndUpdate(

  req.params.id,

  { status: "rejected" },

  { new: true }

);

res.json(updated);


} catch (error) {


res.status(500).json({ error: error.message });


}

};

// DELETE MESSAGE
export const deleteMessage = async (req, res) => {

try {


await Message.findByIdAndDelete(req.params.id);

res.json({ message: "Message deleted" });


} catch (error) {


res.status(500).json({ error: error.message });


}

};
