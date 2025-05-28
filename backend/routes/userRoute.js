import express from "express";
import {
  activateUser,
  createUser,
  getUser,
  loginUser,
  Logout,
  updateUserInfo,
  updateUserAvatar,
  updateUserAddress,
  deleteUserAddress,
  updateUserPassword,
  getUserInfo,
<<<<<<< HEAD
=======
  sendContactForm,
>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
} from "../controller/userController.js";
import multer from "multer";
import { isAuthenticated } from "../middleware/auth.js";
const userRouter = express.Router();

// image upload engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

userRouter.post("/create-user", upload.single("file"), createUser);
userRouter.post("/activation", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/getuser", isAuthenticated, getUser);
<<<<<<< HEAD
userRouter.get("/logout", isAuthenticated, Logout);
=======
userRouter.get("/logout",Logout);
>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put(
  "/update-avatar",
  isAuthenticated,
  upload.single("file"),
  updateUserAvatar
);
userRouter.put("/update-user-addresses", isAuthenticated, updateUserAddress);
userRouter.delete(
  "/delete-user-address/:id",
  isAuthenticated,
  deleteUserAddress
);
userRouter.put("/update-user-password", isAuthenticated, updateUserPassword);
userRouter.get("/user-info/:id", getUserInfo);

<<<<<<< HEAD
=======
userRouter.post("/send-email", sendContactForm);

>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
export default userRouter;
