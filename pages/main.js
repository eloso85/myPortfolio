
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Navi from '../src/components/Navi'

import img from '../src/images/insta_me.jpg'
import backImg from '../src/images/sky.jpeg'


export default function Main(){

    return (<>

        <Navi/>
        <div className="cardMe">
        <Card className="bg-dark text-white" style={{width:"50%"}}>
  <Card.Img src={backImg} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{paddingTop:"120px"}}>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
      </div>
        <style jsx global>{`
        
        .cardMe{
         padding-left:50px;
         
        }
        
        
        `}</style>
   </> )
}