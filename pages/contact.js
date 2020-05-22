import Navi from "../components/Navi";
import backImg from '../src/images/austin.jpg'
import ContactForm from "../components/ContactForm";
export default function Projects(){
    return (<>
        <div>
            <Navi />
            <ContactForm/>
        </div>

        <style jsx global>{`
        
        body{
         
            background-image: url(${backImg});
           
            // background-color:black; 
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            
          }
        
        
        
        `}</style>
   </>)
}