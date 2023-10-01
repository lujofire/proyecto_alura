import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom"

const Frascos = () => {
  return <>
    <main>
      <div className="container">
        <h2 className="title-page">Linea de Frascos</h2>
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
  </>
}

export default Frascos