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

  function handleSubmit (evt){
    evt.preventDefault();

    firebase
      .firestore()
      .collection('contacts')
      .add({
        name,
        email,
        message,
        sent
      })
      .then(()=>{
        setName('')
        setEmail('')
        setMessage('')
      })
      
   
  
    setDisabled({
        disabled:true
        });
  
    setEmailSent({
        emailSent:false,
  
        
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
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                   </Card.Text>
                  </Card.Body>

                </Card>

                <Card >
                  <Card.Img variant="top" src={socialImg} style={{ height: '222px' }} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>

                </Card>

                <Card >

                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="John Smith" value={name}  onChange={e=>setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com"  value={email} onChange={e=>setEmail(e.target.value)}/>
                                </Form.Group>
                            
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3"  value ={message} onChange={e=>setMessage(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled= {disabled}>
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