import { Router } from "express";
import { getSessions, createSession } from "../controllers/sessions.js";

const router = Router();

router.get("/", getSessions);
router.get("/create", createSession);

export default router;
