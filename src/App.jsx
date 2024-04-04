import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Header from './components/Header/Header'
import BookMark from './components/book-marks/BookMark'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingtime,setReadingtime] = useState(0);
 
  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time =>{
    const newReadingtime = readingtime + parseInt(time);
   setReadingtime(newReadingtime);
  }
  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto'>
        <Blogs handleMarkAsRead={ handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMark bookmarks={bookmarks} readingtime={readingtime}></BookMark>
      </div>


    </>
  )
}

export default App
