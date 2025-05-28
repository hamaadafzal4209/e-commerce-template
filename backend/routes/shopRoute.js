<<<<<<< HEAD
import express from "express";
import multer from "multer";
=======
import express from "express"
import multer from "multer"
>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
import {
  activateSellerShop,
  createShop,
  loadShop,
  logout,
  shopLogin,
  getShopInfo,
  updateShopAvatar,
<<<<<<< HEAD
  updateSellerInfo
} from "../controller/shopController.js";
import { isSeller } from "../middleware/auth.js";

const shopRouter = express.Router();
=======
  updateSellerInfo,
} from "../controller/shopController.js"
import { isAdmin, isSeller, isAuthenticated } from "../middleware/auth.js"

const shopRouter = express.Router()
>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014

// Image upload engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
<<<<<<< HEAD
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

shopRouter.post("/create-shop", upload.single("file"), createShop);
shopRouter.post("/seller/activation", activateSellerShop);
shopRouter.post("/login-shop", shopLogin);
shopRouter.get("/getSeller", isSeller, loadShop);
shopRouter.get("/logout", isSeller, logout);
shopRouter.get("/get-shop-info/:id", getShopInfo);
shopRouter.put(
  "/update-shop-avatar",
  isSeller,
  upload.single("file"),
  updateShopAvatar
);
shopRouter.put("/update-seller-info",isSeller, updateSellerInfo);

export default shopRouter;
=======
    cb(null, `${Date.now()}${file.originalname}`)
  },
})

const upload = multer({ storage: storage })

// Modified route - removed isAdmin middleware from login
shopRouter.post("/login-shop", shopLogin)

// Fixed route - ensure isAuthenticated runs before isAdmin
shopRouter.post("/create-shop", isAuthenticated, isAdmin, upload.single("file"), createShop)

shopRouter.post("/seller/activation", activateSellerShop)
shopRouter.get("/getSeller", isSeller, loadShop)
shopRouter.get("/logout", isSeller, logout)
shopRouter.get("/get-shop-info/:id", getShopInfo)
shopRouter.put("/update-shop-avatar", isSeller, upload.single("file"), updateShopAvatar)
shopRouter.put("/update-seller-info", isSeller, updateSellerInfo)

export default shopRouter
>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
