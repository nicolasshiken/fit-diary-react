import { Router } from "express";
import {
  getMeals,
  createMeal,
  getMeal,
  deleteMeal,
  updateMeal,
} from "../controllers/meals.js";

const router = Router();

router.get("/", getMeals);
router.post("/", createMeal);
router.get("/:id", getMeal);
router.delete("/:id", deleteMeal);
router.patch("/:id", updateMeal);

export default router;
