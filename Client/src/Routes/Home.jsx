import React, { useEffect, useState } from 'react'
import {ListGroup} from 'react-bootstrap'
import api_1 from '../json/api'
import Spinner from '../Component/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import '../css/home.css'

const Home = () => {
  const [data,setData] = useState([])
  const [SpinnerState,setSpinnerState] = useState(false)
  const Navigate = useNavigate()

  useEffect(() => {
    setSpinnerState(true)
    setData(api_1)
    setSpinnerState(false)
  }, [])

  const handleDetailPage = (item) => {
    return () => {
      localStorage.setItem('data',JSON.stringify(item))
      Navigate('/details')
    }
  } 
  return (
    <div className='container my-3'>
      <h1>Movie List</h1>
      {SpinnerState && <Spinner />}
      {!SpinnerState && data.map((item,index) => {
          return (
            <ListGroup key={index} className='my-5'>
              <ListGroup.Item onClick={handleDetailPage(item)} className="d-flex justify-content-between align-items-start list-item">
                {item.show.image ? <img className='img-home' src={item.show.image.original} alt="img" width={200} height={200} /> : <img className='img-home' src="https://m.media-amazon.com/images/M/MV5BMzVkZmQyZjgtNTZjOC00ODE4LWJmNzItNjY1MGI3ODk0ZDJmXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UY2100_.jpg" alt="img" width={200} height={200} />}
                <div className="mx-3 me-auto">
                  <h6 className='h6-home' style={styles.h6_style}><b>Name</b> : {item.show.name}</h6>
                  <h6 className='h6-home' style={styles.h6_style}><b>Status</b> : {item.show.status}</h6>
                  <h6 className='h6-home' style={styles.h6_style}><b>Language</b> : {item.show.language}</h6>
                  <h6 className='h6-home' style={styles.h6_style}><b>Rating</b> : {item.show.rating.average ? item.show.rating.average : "Not rated"}</h6>
                  <h6 className='h6-home' style={styles.h6_style}><b>Genres</b> : {String(item.show.genres)}</h6>
                  <h6 className='h6-home' style={styles.h6_style}><b>Schedule</b> : {item.show.schedule.time}, {item.show.schedule.days}</h6>
                  <h6  style={styles.h6_style}><b>Link to show</b> : <Link className='link_home' style={styles.Link_style} to={item.show.url} target='_blank'>Link</Link></h6>
                </div>
                <div>
                  {item.show.premiered && <h6 className='h6-home'>Premiered : {item.show.premiered}</h6>}
                  {item.show.ended && <h6 className='h6-home'>Ended : {item.show.ended}</h6>}
                </div>
              </ListGroup.Item>
            </ListGroup>
          )
      })}
    </div>
  )
}

const styles = {
  h6_style : {
    fontSize : '18px'
  },
  Link_style : {
    textDecoration : 'none',
    color : 'black'
  }
}
export default Home
