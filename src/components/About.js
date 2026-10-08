import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import skytunnel from '../src/images/skytunnel.jpeg'
import me from '../src/images/insta_me.jpg'
import whiteLap from '../src/images/laptopwhite.jpeg'

import ResumeData from '../src/resumeData'




export default function About(){
    return(<>
        <Container>
       
            <Row>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Header>
                <Jumbotron className="jumbo"><h1>About Me</h1></Jumbotron>  
                </Card.Header>
                <div  className="aboutMe">
                <p>{ResumeData.main.aboutMe}</p>
                <h1>Experience</h1>
                <p>{ResumeData.main.experince}</p>
                <h1>Career Goal</h1>
                <p>{ResumeData.main.goals}</p>
                <img className="aboutImg" src={skytunnel} width='100%' />
                </div>
                </Card>
                </Col>
                <Col  xs={6} md={4}>
    <div className="cardMe">
         
         <Card  style={{ width: '400px' }}>

           <Card.Img variant="top" src={me} />
           <Card.Body >
             <Card.Title><h1>Alejandro Segura</h1></Card.Title>
             <Card.Text style ={{fontWeight:"bold"}}>Junior Web Developer</Card.Text>
             <Card.Text>The University of Texas at Austin</Card.Text>
             <ul className="socialLink">
               <li>
                 <a href={ResumeData.index.twitterUrl} target="_blank" rel="noopener" aria-label="Twitter">
                   <svg width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416.32" role="img" focusable="false">
                     <title>Twitter</title>
                     <path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92">
                     </path>
                   </svg>
                 </a>
               </li>

               <li>
                 <a href={ResumeData.index.githubUrl} target="_blank" rel="noopener" aria-label="GitHub">
                   <svg width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.36" role="img" focusable="false"><title>GitHub</title>
                     <path fill="currentColor" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z">
                     </path>
                   </svg>
                 </a>
               </li>

               <li>
                 <a href={ResumeData.index.linkedinUrl} target="_blank" rel="noopener" aria-label="GitHub">
                   <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                 </a>
               </li>



             </ul>
           </Card.Body>
           <Card.Footer >
             <small style ={{fontWeight:"bold"}}>
               <p>Language List</p>
               <ul className="langList">
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>jQuery</li>
                  <li>bootstrap</li>
                  <li>React.js</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Next.js</li>

               </ul>
             </small>
           </Card.Footer>
         </Card>
         </div>
      
    </Col>
            </Row>
        </Container>

        <style jsx global>{`
         .jumbo{
            background-image:url(${whiteLap});
            background-size:cover;
            background-position:center;
            height:300px;
            text-align:center;
            color:#0056B3;
          }
        
  
          
  
          .container{
           background-color:white;
            color:black;
            border:solid;
            
            padding:1%;
          }
  
          .aboutMe{
            padding:10px;
          }
  
          .aboutImg{
            padding-bottom:10px;
          }
  
        
  
          .cardMe{
            
            padding-top:15%;
            text-align:center;
            
            
          }
  
          .socialLink{
            list-style-type: ;
            margin: 0px;
            padding: 5px;
            overflow: hidden;
            }
        
            .socialLink li{
              display:inline;
              }
  
            .langList{
              list-style-type:none;
              
              padding:0px;
            }
  
        
        
        
        `}</style>

    </>)
}