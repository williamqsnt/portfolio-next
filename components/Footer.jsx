import styled from "@emotion/styled"


export default function Footer() {

    return(
        <Container>
                 <footer style={{height : '30vh',borderTop : '1px solid #49F2CA', backgroundColor : ' #1b1a27'}}>
      <div style={{width : '100%', height : '100%', display : 'flex',flexDirection : 'column'  ,alignItems : 'center', justifyContent : 'space-around'}}>

          <div style={{display : 'flex'}} >
            <a href="#about" style={{textDecoration : 'none', color : 'rgb(119, 180, 227'}}><li style={{listStyle : 'none', margin : '0.5em'}}>About</li></a>
            <a href="#skills" style={{textDecoration : 'none', color : 'rgb(119, 180, 227'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Skills</li></a>
            <a href="#skills" style={{textDecoration : 'none', color : 'rgb(119, 180, 227'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Experiences</li></a>
            <a href="#projects" style={{textDecoration : 'none', color : 'rgb(119, 180, 227'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Projects</li></a>
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