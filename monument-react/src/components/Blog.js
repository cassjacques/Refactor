import BlogCSS from './Blog.css';
import BlogNavbar from './BlogNavbar';
import BlogFooter from './BlogFooter';

const BlogBody = () => {
    return (
        <>
        <BlogNavbar />
        <BlogBody />
        <BlogFooter />
        </>
    );
};

export default BlogBody;