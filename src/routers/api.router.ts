import express from "express";
import multer from "multer";
import BlogController from "../controllers/blog.controller";
const upload = multer({ dest: 'public/uploads/' })

const apiRouter = express.Router();

apiRouter.post('/blog/create', BlogController.createBlog);
apiRouter.get('/blog/list', BlogController.showListBlog);
apiRouter.put('/blog/update',BlogController.updateBlog);
apiRouter.delete('/blog/delete',BlogController.deleteBlog);
apiRouter.get('/blog/detail/:blogId',BlogController.ShowBlogDetail)
export  default apiRouter