import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import menu from 'public/img/menu.svg'
const inter = Inter({ subsets: ['latin'] })


import styled from '@emotion/styled'
import notion from 'public/video/notion.mp4'


import Competences from '../components/Competences'
import { useEffect, useRef, useState } from "react"
import Typed from 'typed.js'
import Projets from '@/components/Projets'
import Footer from '@/components/Footer'



export default function Home() {


  const [isMenu, setMenu] = useState(false)


  const textRef = useRef(null);
        
  useEffect(() => {
    const options = {
      strings: ['projets','idées', 'réalisations', "créations"],
      typeSpeed: 200,
      loop : true,
      showCursor: false
    }
    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    }
  }, []);




  return (
    <Container>
      
    <Menus>
        <div>
                <p style={{fontSize : '3.5em'}}>WQ</p>
            </div>
           
            <div>
                <button onClick={()=> setMenu(true)}>
                    <p style={{fontSize : '1.5em', color : 'black'}}>Menu</p>
                    <Image src={menu} alt="icon menu" width={35}/>
                </button>
            </div>

    </Menus>

    { isMenu && (
      <div style={{backgroundColor : '#1b1a27', position : 'fixed', right : '0px', top : '0px', height : '50vh', width : '400px', borderRadius : '10px', boxShadow : '0px 0px 4px white', display : 'flex', alignItems : 'center', justifyContent : 'center', flexDirection :'column', zIndex : '1000'}}>
          <button onClick={()=> setMenu(false)} style={{backgroundColor : 'unset', border : 'unset'}}><p style={{fontSize : '4em', color : 'white'}}>&times;</p></button>
          <a onClick={()=> setMenu(false)}  href="https://hashnode.com/@williamqsnt" target="_blank" style={{margin : '1em', fontSize : '1.5em', fontWeight :'500', color :'white'}}>Accéder à mon blog</a>
          <a onClick={()=> setMenu(false)}  href="#competences" style={{margin : '1em', fontSize : '1.5em',fontWeight :'500', color : 'white'}}>Mes compétences</a>
          <a onClick={()=> setMenu(false)}  href="#projets" style={{ margin : '1em', fontSize : '1.5em', fontWeight :'500', color : 'white'}}>Mes projets</a>
      </div>
    )}
          
      
     
      <div className='title'>
        <p style={{color : 'rgb(119, 180, 227)'}}>DÉVELOPPEUR REACT </p>
      
        <br/>
        <h1>Le développeur web qui donnera vie à vos 
        <div style={{height : '2em'}}>
          <p style={{whiteSpace : 'nowrap', color : 'rgb(46, 137, 186)'}} ref={textRef}></p>
        </div></h1>
        <div className="desc" style={{ display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
          <p className="descp"style={{margin : '0em 2em'}}>Développeur web spécialisé dans la création de sites web React. je suis capable de créer des sites web modernes, réactifs et performants.
           Je m&lsquo;assure que chaque site web que je crée soit optimisé pour les moteurs de recherche et facile à utiliser pour les utilisateurs.
            Mon objectif est de créer des sites web qui non seulement répondent aux besoins de mes clients, mais qui les dépassent</p>
        </div>

        <a className='collab' href="mailto:quesnot.william@hotmail.com">Collaborez dès maintenant</a>

        <video src={notion} autoPlay muted loop id="my-video" />        
      </div>

      <div id="competences">
        <Competences />
      </div>
      

      <div id="projets">
        <Projets  />
      </div>
      

      <Footer />
    

    </Container>
  )
}





const Menus = styled.div`

display : flex;
align-items : center;
justify-content : space-between;
padding : 2em;


button {
    display : flex;
    align-items : center;
    border : none;
    background-color : unset;
    

}





`


const Container = styled.div`



  @media only screen and (max-width : 1180px){
    #my-video{
        width : 90%;
      }
      
      
    }


    @media only screen and (max-width : 850px){
    #my-video{
        width : 100%;
      }
      
      
    }

    .title {
      margin-top : 7em;
      display : flex;
      align-items : center;
      justify-content:  center;
      flex-direction : column;
      height : 90vh;
    }


    p{
      font-weight : 400;
      text-align : center;
    }

    h1{
      color : rgb(51,51,51);
      font-size : 2.5em;
      margin-left : auto;
      margin-right : auto;
      margin : 0.5em;
      text-align : center;
    }

    video {
      border-radius : 10px;
      box-shadow : 0px 0px 1em grey;
      width : 100vh;
      margin-top : 2em;
    }

    .collab {
      padding : 1em 2em;
      font-size : 1.25em;
      background-color : rgb(185, 219, 237);
      border : none;
      transition : 0.2s;
      cursor : pointer;
      border-radius : 5px;
      box-shadow : 2px 4px 0.5em lightgrey;
      margin : 1em;
      font-weight : 500;

      :hover{
        background-color : rgb(119, 180, 227);
      }
    }

`
