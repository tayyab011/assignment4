import { DecodeToken, EncodeToken } from "../utility/tokenUtility.js";
import EmailSend from "../utility/emailUtility.js";
import * as path from "node:path";

export const TokenEncode = async (req, res) => {
  let result = EncodeToken("engr.rabbil@yahoo.com", "123");
  res.json({ token: result });
};

export const TokenDecode = async (req, res) => {
  let result = DecodeToken(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVuZ3IucmFiYmlsQHlhaG9vLmNvbSIsInVzZXJfaWQiOiIxMjMiLCJpYXQiOjE3MzAzMDc2MDQsImV4cCI6MTczMjg5OTYwNH0.eWTukpo-qA7-mNPX7ILa91R3uA1t-lsrm_QJ-qJsE-I"
  );
  res.json({ token: result });
};

export const Email = async (req, res) => {
  let EmailTo = "tayyabmd00001@gmail.com";
  let EmailText = "my name is tayyab";
  let EmailSubject = "my name is tayyab";
  let EmailHTMLBody = "hey how are you";
  let result = await EmailSend(EmailTo, EmailText, EmailSubject, EmailHTMLBody);
  res.json({ emailStatus: result });
};

export const Profile = async (req, res) => {
  res.json({ status: "oki" });
};

export const CreateCookies = async (req, res) => {
  let cookieOptions = {
    expires: new Date(Date.now() + 3600 * 1000),
    httpOnly: true,
    sameSite: true,
  };

  let data = "engr.rabbil@yahoo.com";
  let cookieName = "MERN07";

  res.cookie(cookieName, data, cookieOptions);

  res.json({ status: "ok" });
};

export const RemoveCookies = async (req, res) => {
  let cookieOptions = {
    expires: new Date(Date.now() - 3600 * 1000),
    httpOnly: true,
    sameSite: true,
  };
  let data = "";
  let cookieName = "MERN07";
  res.cookie(cookieName, data, cookieOptions);
  res.json({ status: "ok" });
};

export const FileUpload = async (req, res) => {
  // Catch The File
  let myVideo = req.files["myVideo"];
  let myFileName = myVideo.name;

  // Prepare File Storage Path
  let myFilePath = path.resolve(process.cwd(), "storage", myFileName);

  // Move The File Catch Before
  myVideo.mv(myFilePath, function (err) {
    if (err) {
      res.json({ status: "not ok" });
    } else {
      res.json({ status: "ok" });
    }
  });
};
