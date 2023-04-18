import { Table, Container } from "react-bootstrap";
import { React, useState, useEffect, state, handleCallback } from 'react';

function Page3(){

    const [data, setData] = useState([]);
    const getData = () => {

        fetch('http://localhost:3000/employees'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return(
        <Container style={{"marginTop":"5%"}}>
            <h2 className="text-center mb-5">OUR EMPLOYEES</h2>
        <Table striped bordered hover>
      <thead style={{"backgroundColor":"black","color":"white"}}>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Date of Birth</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
      {data && data.length > 0 && data.map((item, index) =>
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.email}</td>
          <td>{item.dob}</td>
          <td>{item.profile}</td>
        </tr>
      )}
      </tbody>
    </Table>
    </Container>
    )
}

export default Page3;