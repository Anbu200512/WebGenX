import express from "express";

import {
createMessage,
getMessages,
acceptMessage,
rejectMessage,
deleteMessage
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/", createMessage);

router.get("/", getMessages);

router.put("/accept/:id", acceptMessage);

router.put("/reject/:id", rejectMessage);

router.delete("/:id", deleteMessage);

export default router;
