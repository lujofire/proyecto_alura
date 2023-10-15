import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import * as React from 'react';





const HojaDeParos = () => {

  console.log(JSON.parse(localStorage.getItem("datos")));

  const datos = JSON.parse(localStorage.getItem("datos"));

  datos.map(x => console.log(x.orden))

let calculo = ((parseInt(datos.map(x => x.hora_inicio)) - parseInt(datos.map(y => y.hora_fin)))*(100)- 40)
console.log("minutos",calculo)
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
    </main>

    <div className="table_div">
      <table className="table">
        <tbody>
        <tr className="tr">
          <th className="color_input">AREA</th>
          <th className="th">FECHA DE PRODUCCION</th>
          <th className="th">NO. ORDEN</th>
          <th className="th">PTC</th>
          <th className="th">PRODUCCION PLANIFICADA</th>
          <th className="th">PRODUCCION TOTAL</th>
          <th className="th">HORA INCIO</th>
          <th className="th">HORA INCIO</th>
          <th className="th">No. DE PARO</th>
        </tr>
        <tr className="tr">
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.area}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.fecha}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.orden}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.ptc}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.planificado}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.produccion}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.hora_inicio}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.hora_fin}</p>)}</td>
          <td className="td">{datos.map((dato, index) => <p key={index}>{dato.paro}</p>)}</td>
         
        </tr>
        </tbody>
      </table>
    </div>
  </>
}

export default HojaDeParos