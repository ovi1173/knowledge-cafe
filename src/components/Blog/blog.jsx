
import PropTypes from 'prop-types';
import { CiBookmarkPlus } from 'react-icons/ci';
const Blog = ({ blog, handleMarkAsRead,handleAddToBookmark }) => {
    const { title, cover, author,reading_time, hash_tag, posted_date, author_img} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-2xl' src={cover} alt={`Cover picture of the title is ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className='ml-2  text-2xl  text-red-600'><CiBookmarkPlus></CiBookmarkPlus></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
           <p>
            {
                hash_tag.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           </p>
           <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func   
    
}
export default Blog;