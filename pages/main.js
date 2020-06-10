import Head from 'next/head'

import Navi from '../components/Navi'
//bootstrap

//images
import backImg from '../src/images/austin.jpg'




import About from '../components/About'


export default function Main() {

  return (<>

  <Head>
    <title>About me</title>
  </Head>

    <Navi />
    
   <About/>
  
   
      <style jsx global >{`
        
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