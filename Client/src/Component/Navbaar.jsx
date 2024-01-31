import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';

function Navbaar() {
  const linkstyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '30px',
    fontWeight: '400',
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" variant='dark'>
        <Container className='justify-content-center'>
          <Nav>
            <Link to='/' style={{...linkstyle}}>BookYourShow</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbaar;