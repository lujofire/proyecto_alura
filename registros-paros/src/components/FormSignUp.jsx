import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};


let frascos= "frascos";
let salsas= "salsas";
let aceitunas ="aceitunas";
let sobres1 = "sobre1";
let sobres2 = "sobre2";
let relleno = "relleno";
let famensal  = "famensal";
let mezclador500 = "mezclador500";
let mezclador200 = "mezclador200";
let mezclador100 = "mezclador100";
let pulverizador = "pulverizador";
let molinos = "molinos"

function FormSignUp({ handleSubmit }) {
	const [area, setArea] = useState('')
	const [fecha, setFecha] = useState('')
	const [paro, setParo] = useState('')
	const [orden, setOrden] = useState("")
	const [ptc, setPtc] = useState("")
	const [planificado, setPlanificado] = useState("")
	const [produccion, setProduccion] = useState("")
	const [hora_inicio, setInicio] = useState("")
	const [hora_fin, setFin] = useState("")
	const [errors, setErrors] = useState({
		name: {
			error: false,
			message:
				"Deben ser al menos 3 caracteres",
		},
	})

	function validarOrden(orden) {
		if (orden.length >= 5) {
			return {
				name: {
					error: false,
					message: "",
				},
			}
		} else {
			return {
				name: {
					error: true,
					message:
						"Deben ser al menos 5 numeros",
				},
			}
		}
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit({
					fecha,
					orden,
					ptc,
					planificado,
					produccion,
					hora_inicio,
					hora_fin,
					paro,
					area

				})
				
			} 
		}
		>
			<div className="margen_boton">
				<Box  sx={{ minWidth: 120 }}>
					<FormControl fullWidth>
						<InputLabel required>Area Productiva</InputLabel>
						<Select
							className="color_input"
							labelId="demo-simple-select-label"
							id="area"
							value={area}
							label="Area Productiva"
							onChange={(e) =>
								setArea(e.target.value)
							}
							MenuProps={MenuProps}
						>
							<MenuItem value={frascos}>FRASCOS</MenuItem>
							<MenuItem value={salsas}>SALSAS Y ADEREZOS</MenuItem>
							<MenuItem value={aceitunas}>ACEITUNAS</MenuItem>
							<MenuItem value={sobres1}>SOBRE PEQUEÑO 1</MenuItem>
							<MenuItem value={sobres2}>SOBRE PEQUEÑO 2</MenuItem>
							<MenuItem value={relleno}>SOBRRE RELLENO</MenuItem>
							<MenuItem value={famensal}>FAMENSAL 1</MenuItem>
							<MenuItem value={mezclador500}>MEZCLADOR 100</MenuItem>
							<MenuItem value={mezclador200}>MEZCLADOR 200</MenuItem>
							<MenuItem value={mezclador100}>MEZCLADOR 500</MenuItem>
							<MenuItem value={pulverizador}>PULVERIZADOR</MenuItem>
							<MenuItem value={molinos}>MOLINOS</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>

			<TextField
				required
				className="color_input"
				type="date"
				id="fecha"
				label="Fecha"
				variant="outlined"
				fullWidth
				margin="normal"
				value={fecha}
				onChange={(e) =>
					setFecha(e.target.value)
				}
			/>

			<TextField
				required
				className="color_input"
				id="orden"
				label="No. OP"
				variant="outlined"
				fullWidth
				margin="normal"
				onChange={(e) =>
					setOrden(e.target.value)
				}
				value={orden}
				error={errors.name.error}
				helperText={
					errors.name.error
						? errors.name.message
						: ""
				}
				onBlur={(e) => {
					setErrors(
						validarOrden(
							e.target.value
						)
					)
				}}
			/>
			<TextField
				required
				className="color_input"
				id="ptc"
				label="PTC"
				variant="outlined"
				fullWidth
				margin="normal"
				value={ptc}
				onChange={(e) =>
					setPtc(e.target.value)
				}
			/>
			<TextField
				className="color_input"
				id="planificado"
				label="Producción Planificada"
				variant="outlined"
				fullWidth
				margin="normal"
				value={planificado}
				onChange={(e) =>
					setPlanificado(e.target.value)
				}
			/>

			<TextField
				className="color_input"
				id="produccion"
				label="Producción Total"
				variant="outlined"
				fullWidth
				margin="normal"
				value={produccion}
				onChange={(e) =>
					setProduccion(e.target.value)
				}
			/>

			<TextField
				required
				className="color_input"
				id="hora_inicio"
				label="Hora Inicio"
				variant="outlined"
				fullWidth
				margin="normal"
				value={hora_inicio}
				onChange={(e) =>
					setInicio(e.target.value)
				}
			/>

			<TextField
				required
				className="color_input"
				id="hora_fin"
				label="Hora Fin"
				variant="outlined"
				fullWidth
				margin="normal"
				value={hora_fin}
				onChange={(e) =>
					setFin(e.target.value)
				}
			/>
			<div className="margen_boton">
				<Box sx={{ minWidth: 120 }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Lista de Paros</InputLabel>
						<Select
							className="color_input"
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={paro}
							label="Lista de Paros"
							onChange={(e) =>
								setParo(e.target.value)
							}
							MenuProps={MenuProps}
						>
							<MenuItem value={1}>1. Calibración de máquina</MenuItem>
							<MenuItem value={2}>2. Inicio de Op</MenuItem>
							<MenuItem value={3}>3. Cambio de bobina/ribbon/fechador</MenuItem>
							<MenuItem value={4}>4. Lavado de máquina</MenuItem>
							<MenuItem value={5}>5. Desinfección de Equipo</MenuItem>
							<MenuItem value={6}>6. Limpieza de área/máquina/equipos cambios de op</MenuItem>
							<MenuItem value={7}>7. Limpieza de Mordaza/cuchilla/dosificador</MenuItem>
							<MenuItem value={8}>8. Tiempo de Comida</MenuItem>
							<MenuItem value={9}>9. Reunión</MenuItem>
							<MenuItem value={10}>10. Lavado de manos</MenuItem>
							<MenuItem value={11}>11. Pruebas en máquina/pruebas en pp</MenuItem>
							<MenuItem value={12}>12. Sin programación de Producción</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>
			<div className="margen_boton boton">
				<Button
					className="margen_boton"
					variant="contained"
					type="submit"
				>
					Guardar
				</Button>
				

				<Link to="/hojaparos">
					<Button
						className="margen_boton"
						variant="contained"
						type="submit"
					>
						ver Registros
					</Button>
				</Link>

			</div>
		</form >
	)
}


export default FormSignUp

