import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom"


const HojaDeParos = (props) => {

   
    console.log("array", props)
    return (
      <main>
        <div className="container">
          <h2 className="title-page">Hoja de Paros</h2>
        </div>

        <section className='colaboradores equipo'>
      <div className='regresar'>
        <Link to="/frascos" >
          <AiOutlineLeftCircle
            className='margen_flecha'
          />
        </Link>
      </div>
    </section>

  
      </main>
    )
  }
  
  export default HojaDeParos