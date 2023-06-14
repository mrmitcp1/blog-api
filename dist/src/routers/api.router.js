"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const blog_controller_1 = __importDefault(require("../controllers/blog.controller"));
const upload = (0, multer_1.default)({ dest: 'public/uploads/' });
const apiRouter = express_1.default.Router();
apiRouter.post('/blog/create', blog_controller_1.default.createBlog);
apiRouter.get('/blog/list', blog_controller_1.default.showListBlog);
apiRouter.put('/blog/update', blog_controller_1.default.updateBlog);
apiRouter.delete('/blog/delete', blog_controller_1.default.deleteBlog);
apiRouter.get('/blog/detail/:blogId', blog_controller_1.default.ShowBlogDetail);
exports.default = apiRouter;
//# sourceMappingURL=api.router.js.map