import { useEffect } from "react";
import { useState } from "react";
import Blog from "../components/Blog/blog";
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>
            {
              blogs.map(blog => <Blog key={blog.id} blog={blog}  handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleMarkAsRead: PropTypes.func,
    handleAddToBookmark: PropTypes.func
}
export default Blogs;