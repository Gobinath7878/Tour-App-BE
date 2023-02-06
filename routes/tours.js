import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  updateTour,
  getFeaturedTour,
  getTourCount,
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//post new tour
router.post("/",verifyAdmin, createTour);

// update tour
router.put("/:id",verifyAdmin, updateTour);

// delete tour
router.delete("/:id",verifyAdmin, deleteTour);

// get single tour
router.get("/:id", getSingleTour);

// get All tour
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
