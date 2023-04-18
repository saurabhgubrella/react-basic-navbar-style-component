import { Container, Col, Row, Button } from "react-bootstrap";


function Page2() {
    return (
        <Container fluid className="top-row">
            <Container>
               <Row className="p-5">
                <Col className="my-auto">
                    <h1>About Us</h1>
                <h3 className="my-5">Business planning, Strategy and Execution. A problem-solving philosophy that leads to the product people actually want to see</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="my-5">
                <Button variant="info">Read More</Button>{' '}<Button variant="outline-info">Our Services</Button>{' '}
                </div>
                </Col>
                <Col style={{"textAlign":"center" }}>
                <img className="side-img" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                </Col>
               </Row>
            </Container>
        </Container>
    )
}

export default Page2;