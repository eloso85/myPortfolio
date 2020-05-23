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
//hello/yuo/hello
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [emailSent, setEmailSent] = useState(null)

    const handleSubmit =(evt)=>{
        evt.preventDefault();

       

        setDisabled({
            disabled:true
            });

        setEmailSent({
            emailSent:false,

        })
      }
     

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [emailSent, setEmailSent] = useState(null)

    const handleResponse = (status, msg) => {
        if (status === 200) {
          setDisabled({
            disabled: true,
            
            
          })
          setEmail({
            email: ''
            })
          setMessage({
              message:''
          })  
        } else {
          setEmailSent({
            info: { error: true, msg: msg }
          })
        }
      }

    const handleSubmit = async e => {
        e.preventDefault()
        setDisabled(prevStatus => ({ ...prevStatus, disabled: true }))
        const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: 
          JSON.stringify({
              name:"",
              email:"",
              message:""
          })
        })
        const text = await res.text()
        handleResponse(res.status, text)
      }


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
                              <Form onSubmit={handleOnSubmit}>
                                  <Form.Group controlId="exampleForm.ControlInput1">
                                      <Form.Label>Name</Form.Label>
                                      <Form.Control type="name" placeholder="John Smith" value=''  onChange='' />
                                  </Form.Group>

                                  <Form.Group controlId="exampleForm.ControlInput1">
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control id="email" type="email" placeholder="name@example.com" required value={inputs.email} onChange={handleOnChange}/>
                                  </Form.Group>
                              
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                  <Form.Label>Message</Form.Label>
                                  <Form.Control as="textarea" rows="3" id="message" required value ={inputs.message} onChange={handleOnChange} />
                              </Form.Group>
                              <Button variant="primary" type="submit" disabled= {status.submitting}>
                                  Send
                              </Button>

                            
                          </Form>
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

    .success-msg{
        color: #57a773;
        padding: 10px 15px;
    }

    .err-msg{
        color: red;
        padding: 10px 15px;
    }
    
    
    
    
    
    `}</style>
    </>)
}