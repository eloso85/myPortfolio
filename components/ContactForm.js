import React, { useState } from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import email1 from '../src/images/email.jpg'
import socialImg from '../src/images/social.jpg'
import phoneImg from '../src/images/phone.jpg'

import firebase from '../src/firebase'




export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [emailSent, setEmailSent] = useState(null)

  //hello/yuo/hello

  function handleSubmit(evt) {
    evt.preventDefault();

    firebase
      .firestore()
      .collection('contacts')
      .add({
        name,
        email,
        message,
        sent: new Date()
      })
      .then(() => {
        setName('')
        setEmail('')
        setMessage('')
      })



    setDisabled({
      disabled: true
    });

    setEmailSent({
      emailSent: false,


    })

  }


  return (<>

    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Jumbotron className='jumbo' style={{ textAlign: 'center' }}>


                <h1 style={{ fontWeight: 'bold' }}>Contact Me</h1>


              </Jumbotron>
            </Card.Header>
            <Card.Body>
              <CardDeck>

                <Card >
                  <Card.Img variant="top" src={phoneImg} style={{ height: '222px' }} />
                  <Card.Body>
                    <Card.Title>Phone And Email </Card.Title>
                    
                      <ListGroup variant="flush">
                        <ListGroup.Item>(512)662-5553</ListGroup.Item>
                        <ListGroup.Item>eloso85@gmail.com</ListGroup.Item>

                      </ListGroup>
                    
                  </Card.Body>
                  </Card>

                <Card >
                  <Card.Img variant="top" src={socialImg} style={{ height: '222px' }} />
                  <Card.Body>
                    <Card.Title>Social Media</Card.Title>
                    
                      <ListGroup defaultActiveKey="" >
                        <ListGroup.Item action href="#link1">
                          
                            <svg width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416.32" role="img" focusable="false">
                              
                              <path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92">
                              </path>
                            </svg>
                            
                          Twitter
                          </ListGroup.Item>

                        <ListGroup.Item action href="#link2" >
                             <svg width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.36" role="img" focusable="false"><title>GitHub</title>
                              <path fill="currentColor" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z">
                              </path>
                            </svg>
                            GitHub
                          </ListGroup.Item>

                        <ListGroup.Item action href="#link3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm1 16.852c0 1.738-1.41 3.148-3.148 3.148h-9.662c-1.739 0-3.19-1.41-3.19-3.148v-6.852h4.498c-.362.609-.581 1.313-.581 2.073 0 2.249 1.824 4.073 4.073 4.073 2.249 0 4.073-1.824 4.073-4.073 0-.76-.219-1.464-.58-2.073h4.517v6.852zm-11.148-4.779c0-.939.416-1.783 1.072-2.358.23-.202.49-.371.771-.499.395-.18.833-.28 1.294-.28.461 0 .899.101 1.293.28.283.128.543.297.773.499.654.575 1.07 1.419 1.07 2.358 0 1.73-1.406 3.138-3.137 3.138-1.728-.001-3.136-1.408-3.136-3.138zm11.148-2.74h-5.003c-.774-.85-1.859-1.333-3.007-1.333-1.142 0-2.23.479-3.008 1.333h-4.982v-2.185c0-1.052.532-1.978 1.333-2.549v2.735h.667v-3.103c.212-.084.436-.142.667-.18v3.282h.667v-3.333h.666v3.333h.667v-3.333h8.185c1.738 0 3.148 1.41 3.148 3.148v2.185zm-10.319 2.74c0-1.281 1.038-2.319 2.319-2.319s2.318 1.038 2.318 2.319-1.037 2.319-2.318 2.319c-1.281 0-2.319-1.038-2.319-2.319zm8.985-6.25v1.687c0 .271-.221.49-.496.49h-1.674c-.273 0-.496-.219-.496-.49v-1.687c0-.271.223-.49.496-.49h1.674c.275 0 .496.219.496.49z" ></path>
                            </svg>
                          Instagram
                        </ListGroup.Item>

                        <ListGroup.Item action href="#link3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                     Linkedin
                        </ListGroup.Item>
                      </ListGroup>
                    
                  </Card.Body>

                </Card>

                <Card >

                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="John Smith" value={name} onChange={e => setName(e.target.value)} />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="7" value={message} onChange={e => setMessage(e.target.value)} />
                      </Form.Group>
                      <Button variant="primary" type="submit" disabled={disabled}>
                        Send
                            </Button>

                      {/* {emailSent === true && <p className="success-msg">Email Sent</p>}
                            {emailSent === false && <p className="err-msg">Email Not Sent</p>} */}

                    </Form>
                  </Card.Body>

                </Card>


              </CardDeck>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
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
        
        //background-color:white;
         // color:black;
          //border:solid;
          padding:2%;
    }

   .phone{
     
     width:260px;
   }
    
   h1{
    font-size: 100px;
    
   } 
    
    
    
    `}</style>
  </>)
}