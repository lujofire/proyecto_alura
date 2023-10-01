import { Link } from "react-router-dom"

const Cashitas = (props) => {
  const { area, descripcion, foto, id } = props.datos
console.log(" ARRAY", props.datos)
  return <>
  

    <section className='colaboradores equipo'>
      <div className="colaborador">
      <h2 className="title-page">{area}</h2>
        <div className="encabezado">
          <Link to="/aceitunas" >
            <img className='logos' src={foto} alt={area} />
          </Link>
        </div>
        <div className="info">
          <h4>{area}</h4>
          <h5>{descripcion}</h5>
        </div>
      </div>
    </section>




  </>



}

export default Cashitas