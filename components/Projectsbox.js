
import bulb from '../src/images/bulb.jpg'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'

import ResumeData from '../src/resumeData'

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


    <h1 style={{ fontWeight: 'bold' }}>Projects</h1>
    <p>
     A list of project I have created
     </p>

</Jumbotron>
</Card.Header>
    <Card.Body>


<ul className="list-unstyled">
  <Media as="li">
    <img
      width={150}
      height={150}
      className="mr-3"
      src={ResumeData.projects.img1}
      alt="Generic placeholder"
    />
    <Media.Body>
      < a href={ResumeData.projects.url1} target="_blank"><h5>{ResumeData.projects.Name1}</h5></a>
      <p>
       {ResumeData.projects.description1}
      </p>
    </Media.Body>
  </Media>
<br/>
  <Media as="li">
    <img
      width={150}
      height={150}
      className="mr-3"
      src={ResumeData.projects.img2}
      alt="Generic placeholder"
    />
    <Media.Body>
    < a href={ResumeData.projects.url2} target="_blank"><h5>{ResumeData.projects.Name2}</h5></a>
      <p>
        {ResumeData.projects.description2}
      </p>
    </Media.Body>
  </Media>
        <br/>
  <Media as="li">
    <img
      width={150}
      height={150}
      className="mr-3"
      src={ResumeData.projects.img3}
      alt="Generic placeholder"
    />
    <Media.Body>
    < a href={ResumeData.projects.url3} target="_blank"><h5>{ResumeData.projects.Name3}</h5></a>
      <p>
        {ResumeData.projects.description3}
      </p>
    </Media.Body>
  </Media>
</ul>
                              







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
        color:#0056B3;
        background-image:url(${bulb});
        background-size:cover;
        background-position:center;
        height:300px;
        
    }
    
    
    
    
    `}</style>
    </>)
}