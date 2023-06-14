declare class BlogController {
    static createBlog(req: any, res: any): Promise<void>;
    static showListBlog(req: any, res: any): Promise<void>;
    static updateBlog(req: any, res: any): Promise<void>;
    static deleteBlog(req: any, res: any): Promise<void>;
    static ShowBlogDetail(req: any, res: any): Promise<void>;
}
export default BlogController;
