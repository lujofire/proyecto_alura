import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Salsas = (props) => {
  const [state, setState] = useState({
    nombre: "",
    profesion: ""
  });
 
  const handleInputChange = (e) => {
    setState({
      [e.target.name]: e.target.value
    });
  };
 
  return (
    <form>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" onChange={handleInputChange} />
      <br />
      <label for="profesion">Profesión:</label>
      <input type="text" name="profesion" onChange={handleInputChange} />
      <h2>Se ingreso el nombre: {state.nombre} </h2>
      <h2>Se ingreso la profesión: {state.profesion} </h2>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Salsas