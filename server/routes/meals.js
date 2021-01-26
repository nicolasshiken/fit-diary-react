import { Router } from "express";
import {
  getMeals,
  createMeal,
  getMeal,
  deleteMeal,
  updateMeal,
} from "../controllers/meals.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", auth, getMeals);
router.post("/", auth, createMeal);
router.get("/:id", auth, getMeal);
router.delete("/:id", auth, deleteMeal);
router.patch("/:id", auth, updateMeal);

export default router;
