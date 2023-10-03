import { getValue } from '@testing-library/user-event/dist/utils';
import '../assets/css/componentes/area.css';
import frasos from '../assets/img/frascos3.jpg';
import salsas1 from '../assets/img/salsas2.jpg';
import aceituna from '../assets/img/aceituna1.jpg';
import sobre1 from '../assets/img/sobres1.jpg';
import sobre2 from '../assets/img/sp2.jpg';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { AiOutlineLeftCircle } from "react-icons/ai";



const Sasson = () => {

    return <>

        <main>
            <div className="container">
                <h2 className="title-page">SASSÓN</h2>
            </div>
        </main>

        <section className='colaboradores equipo'>
            <div className="colaborador">
                <div className="encabezado">
                    <Link to="/frascos" >
                        <img className='logos' src={frasos} alt={"Frascos"} />
                    </Link>
                </div>
                <div className="info">
                    <h4>{"FRASCOS"}</h4>
                    <h5>{"Linea Automatizada"}</h5>
                </div>
            </div>

            <div className="colaborador">
                <div className="encabezado">
                    <Link to="/salsas">
                        <img className='logos' src={salsas1} alt={"Salsas"} />
                    </Link>
                </div>
                <div className="info">
                    <h4>{"SALSAS Y ADEREZOS"}</h4>
                    <h5>{"DAMOS SABOR A TU VIDA"}</h5>
                </div>
            </div>
            <div className="colaborador">
                <div className="encabezado">
                    <Link to="/aceitunas">
                        <img className='logos' src={aceituna} alt={"Aceitunas"} />
                    </Link>
                </div>
                <div className="info">
                    <h4>{"ACEITUNAS"}</h4>
                    <h5>{"DAMOS SABOR A TU VIDA"}</h5>
                </div>
            </div>
            <div className="colaborador">
                <div className="encabezado">
                    <Link to="/salsas">
                        <img className='logos' src={sobre1} alt={"SP1"} />
                    </Link>
                </div>
                <div className="info">
                    <h4>{"SOBRE P1"}</h4>
                    <h5>{"DAMOS SABOR A TU VIDA"}</h5>
                </div>
            </div>
            <div className="colaborador">
                <div className="encabezado">
                    <Link to="/salsas">
                        <img className='logos' src={sobre2} alt={"SP2"} />
                    </Link>
                </div>
                <div className="info">
                    <h4>{"SOBRE P2"}</h4>
                    <h5>{"DAMOS SABOR A TU VIDA"}</h5>
                </div>
            </div>
            <div className="colaborador">
                <div className="encabezado">
                    <Link to="/salsas">
                        <img className='logos' src={salsas1} alt={"RELLENO"} />
                    </Link>
                </div>
                <div className="info">
                    <h4>{"SOBRE RELLENO"}</h4>
                    <h5>{"DAMOS SABOR A TU VIDA"}</h5>
                </div>
            </div>
            <div className='regresar'>
                <Link to="/" >
                    <AiOutlineLeftCircle className='margen_flecha'/>
                </Link>
            </div>
        </section>


    </>
}

export default Sasson
