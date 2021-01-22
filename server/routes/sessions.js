import { Router } from "express";
import {
  getSessions,
  createSession,
  getSession,
} from "../controllers/sessions.js";

const router = Router();

router.get("/", getSessions);
router.post("/", createSession);
router.get("/:id", getSession);

export default router;
