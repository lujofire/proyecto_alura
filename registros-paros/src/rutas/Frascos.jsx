import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom"
import Container from '@mui/material/Container'
import FormSignUp from '../components/FormSignUp'
import Typography from '@mui/material/Typography'
import '../App.css'




let frascos="Linea de Frascos";

const Frascos = () => {

  const handleSubmit = (valores) => {
    localStorage.setItem("datos", JSON.stringify(valores));

    console.log('orden: ', valores)
    alert("El paro No. "+  valores.paro + "  fue ingresado con éxito" )
   
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