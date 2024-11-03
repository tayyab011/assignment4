import express from "express";
const router = express.Router();
import * as FeaturesController from "../app/controllers/FeaturesController.js";
import authMiddleware from "../app/middlewares/authMiddleware.js";
import { FileUpload } from "../app/controllers/FeaturesController.js";

router.get("/feature1/TokenEncode", FeaturesController.TokenEncode);
router.get("/feature2/TokenDecode", FeaturesController.TokenDecode);
router.get("/feature3/Email", FeaturesController.Email);
router.get("/feature4/Profile", authMiddleware, FeaturesController.Profile);
router.get("/feature5/CreateCookies", FeaturesController.CreateCookies);
router.get("/feature6/RemoveCookies", FeaturesController.RemoveCookies);

router.post("/feature7/FileUpload", FeaturesController.FileUpload);

export default router;
