import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getMyBlogs,
  getPublicBlogs,
  updateBlog,
} from "../controllers/blog.controller.js";
import { checkUserAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/create", checkUserAuth, createBlog);

// GET
router.get("/public", checkUserAuth, getPublicBlogs);
router.get("/", checkUserAuth, getMyBlogs);

// put
router.put("/update/:blogId", checkUserAuth, updateBlog);

// delete
router.delete("/delete/:blogId", checkUserAuth, deleteBlog);

export default router;
