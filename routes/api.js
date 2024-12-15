import express from "express";
const router = express.Router();
import * as Usercontroller from "../app/controllers/Usercontroller.js";
import authMiddleware from "../app/middlewares/authMiddleware.js";

/* user */

router.post("/Registration", Usercontroller.Registration); //done 1
router.post("/Login", Usercontroller.Login); //done 2 +3
router.get("/Profiledetails", authMiddleware, Usercontroller.Profiledetails); //done 4
router.post("/alluserProfile", authMiddleware, Usercontroller.allProfile); //done 5
router.post("/Profileupdate", authMiddleware, Usercontroller.Profileupdate); //done 6
router.post("/Profiledelete", authMiddleware, Usercontroller.Profiledelete); // done 7

export default router;
