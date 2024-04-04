
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const BookMark = ({ bookmarks,readingtime }) => {

    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2'>
            <h1>Total Reading Time: {readingtime}</h1>
            <h2 className="text-3xl ml-2 text-center p-3">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) =>
                    <Bookmark bookmark={bookmark} key={idx}></Bookmark>

                )
            }
        </div>
    );
};
BookMark.propTypes = {
    bookmarks: PropTypes.array,
    readingtime:PropTypes.number
}
export default BookMark;