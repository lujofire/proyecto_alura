import { AiOutlineLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom"
import Container from '@mui/material/Container'
import FormSignUp from '../components/FormSignUp'
import Typography from '@mui/material/Typography'
import '../App.css'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'orden', headerName: 'No. Op', width: 100 },
  { field: 'ptc', headerName: 'PTC', width: 100 },
  { field: 'planificado', headerName: 'Producción Planificada', type: 'number', width: 200,},
  { field: 'produccion', headerName: 'Producción Total', type: "number", width: 160,},
];

const rows = [
  { id: 1, orden: '12525', ptc: '00582', planificado: 258, produccion: 5852 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];





const Frascos = () => {

  const handleSubmit = (valores) => {
    console.log('Frascos: ', valores)
  }


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

    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Registro de Paros</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className="color_input"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5},
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
      />
    </div>


  </>
}

export default Frascos