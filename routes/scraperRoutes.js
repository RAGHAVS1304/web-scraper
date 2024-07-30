import express from "express";
import { getHome, getScrappedData } from "../controllers/scraperController.js";
const router = express.Router();

router.get("/", getHome);
router.get("/data-scraper", getScrappedData);
export default router;
