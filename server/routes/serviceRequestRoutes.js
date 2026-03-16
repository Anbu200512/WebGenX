import express from "express";

import {
createRequest,
getRequests,
acceptRequest,
deleteRequest
} from "../controllers/serviceRequestController.js";

const router = express.Router();

router.post("/",createRequest);
router.get("/",getRequests);

router.put("/:id/accept",acceptRequest);

router.delete("/:id",deleteRequest);

export default router;