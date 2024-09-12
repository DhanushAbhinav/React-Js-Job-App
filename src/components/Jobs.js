import React, {useState, useEffect} from 'react'
import axios from 'axios'
import JobCard from './JobCard'
import './Jobs.css'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchJobs = async pageNum => {
    setLoading(true)
    try {
      const response = await axios.get(
        'https://testapi.getlokalapp.com/common/jobs?page=${pageNum}',
      )
      const newJobs = response.data.jobs
      setJobs(prevJobs => [...prevJobs, ...newJobs])
      setHasMore(newJobs.length > 0)
    } catch (err) {
      setError('Error fetching jobs')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs(page)
  }, [page])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        if (hasMore && !loading) {
          setPage(prevPage => prevPage + 1)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore, loading])

  return (
    <div className="jobs-container">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {jobs.length === 0 && !loading && <div>No jobs available.</div>}
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default Jobs
