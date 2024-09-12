import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Jobs from './components/Jobs'
import Bookmarks from './components/Bookmark'
import './App.css'

const App = () => {
  const [activeTab, setActiveTab] = useState('jobs')

  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
        <nav className="bottom-nav">
          <Link
            to="/"
            onClick={() => setActiveTab('jobs')}
            className={activeTab === 'jobs' ? 'active' : ''}
          >
            Jobs
          </Link>
          <Link
            to="/bookmarks"
            onClick={() => setActiveTab('bookmarks')}
            className={activeTab === 'bookmarks' ? 'active' : ''}
          >
            Bookmarks
          </Link>
        </nav>
      </div>
    </Router>
  )
}

export default App
