import unime from '../src/images/unicorn_me.jpg'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

//hello
export default function Projectsbox() {

    return (<>
        <div className="container">
            <Container>
                <Row>
                    <Col>

                        <Card>
                            <Card.Header>
                                <Jumbotron fluid>
                                    <Container style={{textAlign:'center'}}>
                                        <h1>Fluid jumbotron</h1>
                                        <p>
                                            This is a modified jumbotron that occupies the entire horizontal space of
                                            its parent.
                                        </p>
                                    </Container>
                                </Jumbotron>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>My Projects</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sollicitudin augue, eget mattis neque. Nullam molestie, purus sed vulputate fermentum, lacus dui volutpat lorem, sed bibendum ante ex non nunc. Fusce nec felis vitae turpis tincidunt iaculis cursus vitae mi. Nunc ultrices eget turpis eu rutrum. Integer ullamcorper orci nec velit lacinia, nec rhoncus libero lobortis. Etiam varius molestie tellus nec egestas. Donec mauris orci, vestibulum quis semper id, volutpat at lectus. Integer justo lacus, sagittis eget orci sit amet, ullamcorper ullamcorper purus. Quisque sit amet nunc sed tortor mollis convallis porttitor vel risus. Integer arcu magna, placerat ornare ultrices at, faucibus vitae nunc. Sed a dui metus. Sed eu nisl vel velit varius dignissim a sit amet libero. Nunc in eros sollicitudin, varius lacus vel, pellentesque risus. Quisque eu commodo risus, et ultricies ex.
                                </Card.Text>


                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>

        <style jsx>{`
    
    .container{
        
        background-color:white;
          color:black;
          border:solid;
          padding:1%;
    }
    
    
    
    `}</style>
    </>)
}