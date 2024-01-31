import React, { useState } from 'react'
import DangerousHtml from './DangerousHtml'
import '../css/detailpages.css'
import { Modal, Button,Form } from 'react-bootstrap'

const Detailpage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const handleChange = (e) => {
    if(e.target.name === 'email'){
      setEmail(e.target.value)
    }
    if(e.target.name === 'Name'){
      setName(e.target.value)
    }
    if(e.target.name === 'phone'){
      setPhone(e.target.value)
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    const data = {email,name,phone}
    localStorage.setItem('BookedTicket',JSON.stringify(data))
    setEmail('')
    setName('')
    setPhone('')
    handleClose()
  }

  const data = JSON.parse(localStorage.getItem('data'))
  return (
    <div className='container my-5'>
      {data &&
        <div className='row'>
          <div className='col-md-5'>
            {data.show.image ? <img className='img-detail' src={data.show.image.original} alt="img" width={500} height={500} /> : <img className='img-detail' src="https://m.media-amazon.com/images/M/MV5BMzVkZmQyZjgtNTZjOC00ODE4LWJmNzItNjY1MGI3ODk0ZDJmXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UY2100_.jpg" alt="img" width={500} height={500} />}
          </div>
          <div className='col-md-7'>
            <h1><b>{data.show.name}</b></h1>
            <h6><b>Status</b> : {data.show.status}</h6>
            <h6><b>Language</b> : {data.show.language}</h6>
            <h6><b>Rating</b> : {data.show.rating.average ? data.show.rating.average : "Not rated"}</h6>
            <h6><b>Genres</b> : {String(data.show.genres)}</h6>
            {data.show.schedule.time && <h6><b>Schedule</b> : {data.show.schedule.time}, {data.show.schedule.days}</h6>}
            {data.show.premiered && <h6><b>Premiered</b> : {data.show.premiered}</h6>}
            {data.show.ended && <h6><b>Ended</b> : {data.show.ended}</h6>}
            <h6><b style={{ fontSize: "30px" }}>Summary</b> <br /> <DangerousHtml htmlData={data.show.summary} /></h6>
            <Button className='btn btn-primary book-btn' onClick={handleShow}>Book Now</Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Book Ticket for {data.show.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={HandleSubmit}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' value={email} onChange={handleChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='Name' value={name} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type='tel' name='phone' value={phone} onChange={handleChange}/>
                  </Form.Group>
                  <Button variant="primary mx-2" type='submit'>Understood</Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      }

    </div>
  )
}

export default Detailpage
