import styled from "@emotion/styled"


export default function Footer() {

    return(
        <Container>
                 <footer style={{height : '30vh',borderTop : '1px solid #49F2CA', backgroundColor : ' #1b1a27'}}>
      <div style={{width : '100%', height : '100%', display : 'flex',flexDirection : 'column'  ,alignItems : 'center', justifyContent : 'space-around'}}>

          <div style={{display : 'flex'}} >
            <a href="#competences" style={{textDecoration : 'none', color : 'rgb(119, 180, 227'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Compétences</li></a>
            <a href="Projets" style={{textDecoration : 'none', color : 'rgb(119, 180, 227'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Projets</li></a>
        
          </div>
     
          <div>
          <a href="mailto:quesnot.william@hotmail.com"  style={{display : 'flex', alignItems : 'center', justifyContent : 'center', textDecoration : 'none', color : 'white'}}>quesnot.william@hotmail.com</a>
          </div>
        
      </div>    
    

      <p style={{backgroundColor : ' #1b1a27', textAlign : 'center',padding : '3em 0 2em 0', color : 'rgb(119, 180, 227'}}> &copy; William Quesnot | 2022</p>

      
    </footer>
        </Container>
    )


}


const Container = styled.div`


`