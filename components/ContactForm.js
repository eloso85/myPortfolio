import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import email from '../src/images/email2.jpg'

export default function ContactForm() {
    return (<>

        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Jumbotron  className='jumbo' style={{ textAlign: 'center' }}>


                                <h1 style={{fontWeight:'bold'}}>Contact Me</h1>


                            </Jumbotron>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="email" placeholder="John Smith" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="primary"  active>
                                Send
                            </Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    <style jsx global>{`
    
    .jumbo{
        background-image:url(${email});
        background-size:cover;
        background-position:center;
        height:250px;
    }

    .container{
        
        background-color:white;
          color:black;
          border:solid;
          padding:1%;
    }
    
    
    
    
    
    `}</style>
    </>)
}