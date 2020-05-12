

import Navi from '../components/Navi'
//bootstrap
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//images
import backImg from '../src/images/austin.jpg'
import me from '../src/images/insta_me.jpg'
import whiteLap from '../src/images/laptopwhite.jpeg'


export default function Main() {

  return (<>

    <Navi />
    
    <Container  >
  <Row >
 
    <Col xs={12} md={8}><h1 >About Me</h1>

    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sollicitudin augue, eget mattis neque. Nullam molestie, purus sed vulputate fermentum, lacus dui volutpat lorem, sed bibendum ante ex non nunc. Fusce nec felis vitae turpis tincidunt iaculis cursus vitae mi. Nunc ultrices eget turpis eu rutrum. Integer ullamcorper orci nec velit lacinia, nec rhoncus libero lobortis. 
    Etiam varius molestie tellus nec egestas. Donec mauris orci, vestibulum quis semper id, volutpat at lectus. Integer justo lacus, sagittis eget orci sit amet, ullamcorper ullamcorper purus. Quisque sit amet nunc sed tortor mollis convallis porttitor vel risus. Integer arcu magna, placerat ornare ultrices at, faucibus vitae nunc. Sed a dui metus. Sed eu nisl vel velit varius dignissim a sit amet 
    libero. Nunc in eros sollicitudin, varius lacus vel, pellentesque risus. Quisque eu commodo risus, et ultricies ex.Duis venenatis imperdiet odio maximus venenatis. Duis facilisis, leo eget consectetur lacinia, lorem mi lobortis sapien, sed mattis neque urna dapibus nisl. Pellentesque tristique leo nulla, eu dictum nulla convallis tincidunt. Vestibulum iaculis erat id luctus pharetra. Mauris commodo metus a nulla accumsan luctus. 
    Phasellus varius ipsum dolor, a tincidunt felis convallis non. 
    Sed ac tempus arcu, a pharetra risus. Nam augue sapien, pharetra at ipsum ut, mollis tempor risus. Duis ornare rutrum ligula id ultrices.
    Vivamus in nibh rutrum, lacinia eros ac, mattis dolor. Ut neque purus, feugiat eget pellentesque et, luctus ut mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eget consequat velit. Nam eu feugiat risus, eu ullamcorper ex. Ut posuere, eros a congue dictum, turpis velit auctor tellus, at congue nisi velit blandit urna. Fusce et lorem a nisl tempor tempor. Aliquam porta commodo tempus. Ut vel nisi massa. Etiam faucibus lacus quam, eu rutrum risus volutpat sed. Nulla tincidunt porttitor dolor.
    </p>
    <img src={whiteLap} width='600px'/>

    
</Col>
    
    <Col  xs={6} md={4}>
    <div className="cardMe">
         
         <Card  style={{ width: '400px' }}>

           <Card.Img variant="top" src={me} />
           <Card.Body >
             <Card.Title><h1>Alejandro Segura</h1></Card.Title>
             <Card.Text><h3>Junior Web Developer</h3></Card.Text>
             <Card.Text>The University of Texas at Austin</Card.Text>
             <ul className="socialLink">
               <li>
                 <a href="" target="_blank" rel="noopener" aria-label="Twitter">
                   <svg width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416.32" role="img" focusable="false">
                     <title>Twitter</title>
                     <path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92">
                     </path>
                   </svg>
                 </a>
               </li>

               <li>
                 <a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener" aria-label="GitHub">
                   <svg width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.36" role="img" focusable="false"><title>GitHub</title>
                     <path fill="currentColor" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z">
                     </path>
                   </svg>
                 </a>
               </li>

               <li>
                 <a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener" aria-label="GitHub">
                   <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                 </a>
               </li>



             </ul>
           </Card.Body>
           <Card.Footer>
             <small className="about"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sollicitudin augue, eget mattis neque. Nullam molestie, purus sed vulputate fermentum, lacus dui volutpat lorem, sed bibendum ante ex non nunc. Fusce nec felis vitae turpis tincidunt iaculis cursus vitae mi. Nunc ultrices eget turpis eu rutrum. Integer ullamcorper orci nec velit lacinia, nec rhoncus libero lobortis. Etiam varius molestie tellus nec egestas. Donec mauris orci, vestibulum quis semper id, volutpat at lectus. Integer justo lacus, sagittis eget orci sit amet, ullamcorper ullamcorper purus. Quisque sit amet nunc sed tortor mollis convallis porttitor vel risus. Integer arcu magna, placerat ornare ultrices at, faucibus vitae nunc. Sed a dui metus. Sed eu nisl vel velit varius dignissim a sit amet libero. Nunc in eros sollicitudin, varius lacus vel, pellentesque risus. Quisque eu commodo risus, et ultricies ex.</p></small>
           </Card.Footer>
         </Card>
         </div>
      
    </Col>
    <Col><Card.Footer>Hello</Card.Footer></Col>
  </Row>
 
</Container>
  
   
      <style jsx global>{`
        
        body{
         
          background-image: url(${backImg});
         
          // background-color:black; 
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          
        }
      

        

        .container{
         background-color:white;
          color:black;
          border:solid;
          
          padding:1%;
        }

        .about{
          text-align:center;
        }

      

        .cardMe{
          
          padding-top:15%;
          text-align:center;
          
          
        }

        .socialLink{
          list-style-type: none;
          margin: 0;
          padding: 0px;
          overflow: hidden;
          }
      
          .socialLink li{
            display:inline;
            }

       
        
        
        `}</style>
  </>)
}