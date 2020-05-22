import rescipe from '../src/images/recipe.jpg'
import bulb from '../src/images/bulb.jpg'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

//hello
export default function Projectsbox() {

    return (<>
        <div>
            <Container className="container1">
                <Row>
                    <Col>

                        <Card>
                            <Card.Header>
                                <Jumbotron fluid className='jumbo' style={{ textAlign: 'center' }}>
                                    
                                    
                                        <h1 style={{fontWeight:'bold'}}>Projects</h1>
                                        <p>
                                            This is a modified jumbotron that occupies the entire horizontal space of
                                            its parent.
                                        </p>
                                    
                                </Jumbotron>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Wat2Eat</Card.Title>

                                <Container>
                                    <Row>
                                        <Col xs={9} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan metus sit amet tincidunt auctor. Vestibulum in odio dui. Ut non ex arcu. In nec consectetur augue, ut euismod justo. Maecenas ornare lacus eget tortor placerat blandit. Vivamus condimentum, ex accumsan facilisis dignissim, quam metus dignissim odio, sed porttitor nibh ex ut orci. Nulla nisl nisi, sagittis nec augue non, vulputate lobortis purus.</Col>
                                        <Col >
                                            <Image style={{ width: '150px' }} src={rescipe} rounded />
                                        </Col>

                                    </Row>

                                    <Row>




                                        <Col md="auto" >
                                            <Image style={{ width: '150px' }} src={rescipe} rounded />
                                        </Col>
                                        <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan metus sit amet tincidunt auctor. Vestibulum in odio dui. Ut non ex arcu. In nec consectetur augue, ut euismod justo. Maecenas ornare lacus eget tortor placerat blandit. Vivamus condimentum, ex accumsan facilisis dignissim, quam metus dignissim odio, sed porttitor nibh ex ut orci. Nulla nisl nisi, sagittis nec augue non, vulputate lobortis purus.</Col>


                                    </Row>

                                    <Row>
                                        <Col xs={9} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan metus sit amet tincidunt auctor. Vestibulum in odio dui. Ut non ex arcu. In nec consectetur augue, ut euismod justo. Maecenas ornare lacus eget tortor placerat blandit. Vivamus condimentum, ex accumsan facilisis dignissim, quam metus dignissim odio, sed porttitor nibh ex ut orci. Nulla nisl nisi, sagittis nec augue non, vulputate lobortis purus.</Col>
                                        <Col >
                                            <Image style={{ width: '150px' }} src={rescipe} rounded />
                                        </Col>

                                    </Row>
                                </Container>







                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>

        <style jsx global >{`
    
    .container1{
        
        background-color:white;
          color:black;
          border:solid;
          padding:1%;
    }
    
    .jumbo{
        color:white;
        background-image:url(${bulb});
        background-size:cover;
        background-position:center;
        height:300px;
        
    }
    
    
    
    
    `}</style>
    </>)
}