import Usermodel from "../model/Usermodel.js";
import EmailSend from "../utility/emailUtility.js";
import { EncodeToken } from "../utility/tokenUtility.js";

export const Registration = async (req, res) => {
  try {
    let reqbody = req.body;
    await Usermodel.create(reqbody);
    return res.json({
      status: "Registration success",
      message: "user Registration successfull",
    });
  } catch (error) {
    return res.json({
      status: "Registration fail",
      message: "user Registration failed",
    });
  }
};

export const Login = async (req, res) => {
  try {
    let reqbody = req.body;
    let data = await Usermodel.findOne(reqbody);
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: false,
    };
    if (data === null) {
      return res.json({
        status: "Login attampt failed",
        message: "user not fount",
      });
    } else {
      let token = EncodeToken(data["email"], data["_id"]);
      res.cookie("token", token, cookieOption);
      return res.json({
        status: "Login success",
        Token: token,
        message: "user Login successfull",
      });
    }
  } catch (error) {
    return res.json({
      status: "Login failed",
      message: "user Login failed",
    });
  }
};
export const Profiledetails = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let data = await Usermodel.findOne({ _id: user_id });

    return res.json({
      status: "Profiledetails success",
      message: "user Profiledetails successfull",
      data: data,
    });
  } catch (error) {
    return res.json({
      status: "data loaded failed",
      message: "user dataloaded failed",
    });
  }
};

export const allProfile = async (req, res) => {
  try {
    let alldata = await Usermodel.find();

    return res.json({
      status: "allProfiledetails success",
      message: "alluser Profiledetails successfull",
      data: alldata,
    });
  } catch (error) {
    return res.json({
      status: "data loaded failed",
      message: "user dataloaded failed",
    });
  }
};

export const Profileupdate = async (req, res) => {
  try {
    let reqbody = req.body;
    let user_id = req.headers["user_id"];
    await Usermodel.updateOne({ _id: user_id }, reqbody);

    return res.json({
      status: "Profileupdate success",
      message: "user Profileupdate successfull",
    });
  } catch (error) {
    return res.json({
      status: "data update failed",
      message: "data update failed",
    });
  }
};

export const Profiledelete = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    await Usermodel.deleteOne({ _id: user_id });

    return res.json({
      status: "Profiledelete success",
      message: "user Profiledelete successfull",
    });
  } catch (error) {
    return res.json({
      status: "data update failed",
      message: "data update failed",
    });
  }
};
