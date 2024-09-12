import React, {useState, useEffect} from 'react'
import './Bookmark.css'

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    setBookmarks(savedBookmarks)
  }, [])

  return (
    <div className="bookmarks-container">
      {bookmarks.length === 0 ? (
        <div>No jobs bookmarked yet.</div>
      ) : (
        bookmarks.map(job => (
          <div key={job.id} className="bookmark-card">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.phone}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Bookmarks
