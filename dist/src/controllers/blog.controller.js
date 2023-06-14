"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Blog_1 = require("../enity/Blog");
class BlogController {
    static async createBlog(req, res) {
        try {
            const blogRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
            let blogSearch = await blogRepo.findOneBy({ title: req.body.title });
            if (blogSearch) {
                res.status(500).json({
                    message: "Blog đã tồn tại"
                });
            }
            const blogData = {
                title: req.body.title,
                content: req.body.content
            };
            const blog = await blogRepo.save(blogData);
            if (blog) {
                res.status(200).json({
                    message: "Create blog success",
                    blog: blog
                });
            }
        }
        catch (e) {
            res.status(500).json({
                message: e.message
            });
        }
    }
    static async showListBlog(req, res) {
        try {
            const blogRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
            const blogs = await blogRepo.find();
            if (blogs) {
                res.status(200).json({
                    message: 'Sucess',
                    blogs: blogs
                });
            }
        }
        catch (e) {
            res.status(500).json({
                message: e.message
            });
        }
    }
    static async updateBlog(req, res) {
        try {
            const blogRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
            let blogSearch = await blogRepo.findOneBy({ id: req.body.id });
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blog không tồn tại"
                });
            }
            const blog = await blogRepo.update({ id: req.body.id }, req.body);
            res.status(200).json({
                message: "Update product success",
            });
        }
        catch (e) {
            res.status(500).json({
                message: e.message
            });
        }
    }
    static async deleteBlog(req, res) {
        try {
            const blogRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
            let blogSearch = await blogRepo.findOneBy({ id: req.body.id });
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blog không tồn tại"
                });
            }
            const blog = await blogRepo.delete({ id: req.body.id });
            res.status(200).json({
                message: "Delete product success",
            });
        }
        catch (e) {
            res.status(500).json({
                message: e.message
            });
        }
    }
    static async ShowBlogDetail(req, res) {
        try {
            const blogRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
            let blogId = parseInt(req.params.blogId);
            console.log(blogId);
            const blog = await blogRepo.findOneBy({ id: blogId });
            if (blog) {
                res.status(200).json({
                    message: 'Sucess',
                    blog: blog
                });
            }
        }
        catch (e) {
            res.status(500).json({
                message: e.message
            });
        }
    }
}
exports.default = BlogController;
//# sourceMappingURL=blog.controller.js.map