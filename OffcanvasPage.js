import React, { useState } from 'react';
import {Button, Nav} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './style.css'


function OffcanvasPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button variant="primary" onClick={handleShow} style={{"background":"none","border":"unset"}}>
      <i class="fas fa-bars"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title> 
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='profile-section'>
            <img className='img' src="https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0="/>
            <h4 className='title'>Rahul Sharma</h4>
            <p className='subtitle'>Software Engineer</p>
          </div>
          <hr/>
          <div className='sidenav-vertical'>
          <Nav defaultActiveKey="/home" className="flex-column">
     <div className='sidenav-vertical1'>
     <Nav.Link as={Link} to="/" onClick={()=>handleClose()}><i class="fas fa-home"></i>Home</Nav.Link>
      <Nav.Link eventKey="link-1" as={Link} to="/profile" onClick={()=>handleClose()}><i class="fas fa-user"></i>Employees</Nav.Link>
      <Nav.Link eventKey="link-2" as={Link} to="/about" onClick={()=>handleClose()}><i class="fas fa-info-circle"></i>About</Nav.Link>
     </div>
      <hr/>
      <div className='sidenav-vertical1'>
      <Nav.Link eventKey="disabled" >
      <i class="fas fa-question-circle"></i>Help
      </Nav.Link>
      </div>
    </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasPage;