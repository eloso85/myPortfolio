import Navi from "../components/Navi";
import Projectsbox from "../components/Projectsbox";

import backImg from '../src/images/austin.jpg'

export default function Projects(){
    return (<>
        <div>
            <Navi />
            <Projectsbox />
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