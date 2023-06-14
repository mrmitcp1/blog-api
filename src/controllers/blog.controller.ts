import {Request, Response} from "express";
import { AppDataSource} from "../data-source";
import {Blog} from '../enity/Blog';

class BlogController {


    static async createBlog(req:any,res:any){
        try {
            const blogRepo = AppDataSource.getRepository(Blog)
            let blogSearch : any = await blogRepo.findOneBy({title :req.body.title})
            if (blogSearch){
                res.status(500).json({
                    message: "Blog đã tồn tại"
                })
            }
            const blogData = {
                title : req.body.title,
                content : req.body.content
            }
            const blog = await blogRepo.save(blogData)
            if (blog){
                res.status(200).json({
                    message: "Create blog success",
                    blog : blog
                })
            }
        } catch (e){
            res.status(500).json({
                message : e.message
            })
        }
    }
    static async showListBlog(req :any,res:any){
        try {
            const blogRepo = AppDataSource.getRepository(Blog)
            const blogs = await blogRepo.find()
            if (blogs){
                res.status(200).json({
                    message : 'Sucess',
                    blogs : blogs
                })
            }
        } catch (e){
            res.status(500).json({
                message : e.message
            })
        }
    }

    static async updateBlog(req:any,res:any){
        try {
            const blogRepo = AppDataSource.getRepository(Blog)
            let blogSearch = await blogRepo.findOneBy({id:req.body.id})
            if (!blogSearch){
                res.status(500).json({
                    message: "Blog không tồn tại"
                })
            }
            const blog = await blogRepo.update({id:req.body.id}, req.body)
            res.status(200).json({
                message: "Update product success",
            })
        }catch (e){
            res.status(500).json({
                message : e.message
            })
        }

    }
    static async deleteBlog(req:any,res:any){
        try {
            const blogRepo = AppDataSource.getRepository(Blog)
            let blogSearch = await blogRepo.findOneBy({id:req.body.id})
            if (!blogSearch){
                res.status(500).json({
                    message: "Blog không tồn tại"
                })
            }
            const blog = await blogRepo.delete({id:req.body.id})
            res.status(200).json({
                message: "Delete product success",
            })
        } catch (e){
            res.status(500).json({
                message : e.message
            })
        }

    }
    static async ShowBlogDetail (req:any,res:any){
        try {
            const blogRepo = AppDataSource.getRepository(Blog)
            let blogId = parseInt(req.params.blogId)
            console.log(blogId)
            const blog = await blogRepo.findOneBy({id: blogId})
            if (blog){
                res.status(200).json({
                    message : 'Sucess',
                    blog : blog
                })
            }
        } catch (e){
            res.status(500).json({
                message : e.message
            })
        }

    }

}

export default BlogController