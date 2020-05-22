import React, {useState}  from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import email1 from '../src/images/email2.jpg'

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [emailSent, setEmailSent] = useState(null)


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
                                    <Form.Control type="name" placeholder="John Smith" value={name}  onChange={e=>setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com"  value={email} onChange={e=>setEmail(e.target.value)}/>
                                </Form.Group>
                            </Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3"  onChange={()=>setMessage(message)} />
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
        background-image:url(${email1});
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