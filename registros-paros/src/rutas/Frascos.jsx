import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom"
import Container from '@mui/material/Container'
import FormSignUp from '../components/FormSignUp'
import Typography from '@mui/material/Typography'
import '../App.css'





let frascos="Linea de Frascos";

const Frascos = () => {
  let arreglofrascos = []
  

  const handleSubmit = (valores) => {
   console.log("arreglo inicio", arreglofrascos.length)
   arreglofrascos.push(valores);

   console.log('arreglo fin ', arreglofrascos.length)
    alert("El paro No. "+  valores.paro + "  fue ingresado con éxito" )
    
    console.log("obtener data",localStorage.getItem("datos"))
    localStorage.setItem("datos", JSON.stringify(arreglofrascos));
    arreglofrascos = JSON.parse(localStorage.getItem("datos"))

    arreglofrascos.map(x=> console.log(x.orden))


  }

  


  return <>
 
    <main>
      <div className="container">
        <h2 className="title-page">{frascos}</h2>
      </div>
    </main>
    <section className='colaboradores equipo'>
      <div className='regresar'>
        <Link to="/sasson" >
          <AiOutlineLeftCircle
            className='margen_flecha'
          />
        </Link>
      </div>
    </section>

    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Registro de Paros</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
   
  </>
}

export default Frascos