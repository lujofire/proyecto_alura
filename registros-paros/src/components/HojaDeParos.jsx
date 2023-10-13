import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom";



const HojaDeParos = () => {

 console.log(JSON.parse(localStorage.getItem("datos")));

 const datos = JSON.parse(localStorage.getItem("datos"))

    return <>

  
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

    <section className='colaboradores equipo'>
    <div className="post__card title__card">
       <h1>AREA: {datos.area}</h1>
      </div>
      <div className="post__card title__card">
       <h1>FRECHA: {datos.fecha}</h1>
       </div>
       <div className="post__card title__card">
       <h1>ORDEN: {datos.orden}</h1>
        </div>
       <div className="post__card title__card">
       <h1>PTC: {datos.ptc}</h1>
       </div>
       <div className="post__card title__card">
       <h1>PRODUCCIÓN PLANIFICADAD: {datos.planificado}</h1>
       </div>
       <div className="post__card title__card">
       <h1>PRODUCCIÓN TOTAL: {datos.producido}</h1>
       </div>
       <div className="post__card title__card">
       <h1>HORA INICIO: {datos.hora_inicio}</h1>
       </div>
       <div className="post__card title__card">
       <h1>HORA FIN: {datos.hora_fin}</h1>
       </div>
       <div className="post__card title__card">
       <h1>NO. PARAO: {datos.paro}</h1>
       </div>
       </section>
  
      </main>
      </>
  }
  
  export default HojaDeParos