import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


import styled from '@emotion/styled'
import notion from 'public/video/notion.mp4'


import Competences from '../components/Competences'
import { useEffect, useRef } from "react"
import Typed from 'typed.js'
import Projets from '@/components/Projets'



export default function Home() {



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

        <a href="mailto:quesnot.william@hotmail.com">Collaborez dès maintenant</a>

        <video src={notion} autoPlay muted loop id="my-video" />        
      </div>

      <Competences />

      <Projets />

    

    </Container>
  )
}




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
      margin-top : 5em;
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

    a {
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
