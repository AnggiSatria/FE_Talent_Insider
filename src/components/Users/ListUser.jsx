import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import "../../Assets/CSS/ListUserResponsive.scss"

function ListUsers() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const users = [
    {
      id : "1",
      firstName : "Anggi",
      lastName : "Satria",
      email : "anggisatria122@gmail.com",
      phone : "0895321589992",
    },
  ]

  const navigate = useNavigate()

  const handleNavigate = (e) => {
    navigate("/create-user")
  }

  return (
    <div className='containers'>
      <div className="header" >
        <h4 className='h4'>List Users</h4>
        <Button className='button1' onClick={handleNavigate} variant='primary'>Create Users</Button>
      </div>
      
      <Table className='table' striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((e) => {
          return <tr>
          <td>{e.id}</td>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.email}</td>
          <td>{e.phone}</td>
          <td>
            <Button onClick={handleShow} variant='danger'>Delete</Button>
          </td>
        </tr>
        })}
      </tbody>
    </Table>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="text">
            <h6>Are You Sure Want To Delete?</h6>
          </div>
          <div className="button">
            <Button className='buttonModal' variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className='buttonModal2' variant="primary">Yes</Button>
          </div>
          
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ListUsers