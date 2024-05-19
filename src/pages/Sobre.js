import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const Sobre = () => {
  const columns = [
    {
      field:'restaurante',
      headerName: 'Restaurante',
      width: 150,
      editable: true,
    },
    {
      field:'data',
      headerName: 'Data',
      width: 150,
      sortable: true,
      editable: true,
    },
    {
      field: 'bruto',
      headerName: 'Faturamento Bruto',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
    },
    {
      field: 'qtd',
      headerName: 'Quantidade total',
      type: 'number',
      width: 170,
      editable: true,
    },
    {
      field: 'liquido',
      headerName: 'Faturamento Líquido -13%',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 260,
    },
   
    
  ];

  const columns2 = [
    {
      field:'restaurante',
      headerName: 'Restaurante',
      width: 150,
      editable: true,
    },
    {
      field:'data',
      headerName: 'Data',
      width: 150,
      sortable: true,
      editable: true,
    },
    {
      field:'produto',
      headerName: 'Produto',
      width: 150,
      sortable: true,
      editable: true,
    },
    {
      field: 'bruto',
      headerName: 'Faturamento Bruto',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
    },
    {
      field: 'qtd',
      headerName: 'Quantidade total',
      type: 'number',
      width: 170,
      editable: true,
    },
    {
      field: 'liquido',
      headerName: 'Faturamento Líquido -13%',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 260,
    },
   
    
  ];
  
  const rows = [
    { restaurante: 'Retrô Burguer',data:'2024-05-19T20:28:35.639574Z',qtd: 2, bruto:100,liquido:87},
    { restaurante: 'Good Food',data:'2024-05-19T21:15:34.601658Z',qtd: 3, bruto:105,liquido:91.35},
    { restaurante: 'Kyoko Sushi',data:'2024-05-19T21:21:46.897191Z',qtd: 2, bruto:300,liquido:261},
    { restaurante: 'Chinese',data:'2024-05-19T21:22:10.060393Z',qtd: 1, bruto:55,liquido:47.85},
    { restaurante: 'Chef Peruano',data:'2024-05-19T21:27:48.838832Z',qtd: 5, bruto:250,liquido:217.5},
    { restaurante: 'Arabian',data:'2024-05-19T21:35:14.749953Z',qtd: 7, bruto:175,liquido:152.25},
    { restaurante: 'Chef Peruano',data:'2024-05-19T21:43:09.715572Z',qtd: 1, bruto:60,liquido:52.2},
    { restaurante: 'Chef chefinho',data:'2024-05-19T21:54:05.282280Z',qtd: 6, bruto:192.00,liquido:167.04},


    
  ];

  const rows2 = [
    { restaurante: 'Retrô Burguer',data:'2024-05-19T20:28:35.639574Z',qtd: 2,produto:'Jordan Burguer', bruto:100,liquido:87},
    { restaurante: 'Good Food',data:'2024-05-19T21:15:34.601658Z',qtd: 3,produto:'Baião de dois', bruto:105,liquido:91.35},
    { restaurante: 'Kyoko Sushi',data:'2024-05-19T21:21:46.897191Z',qtd: 2,produto:'Combo Sushi', bruto:300,liquido:261},
    { restaurante: 'Chinese',data:'2024-05-19T21:22:10.060393Z',qtd: 1,produto:'Frango Xadrez', bruto:55,liquido:47.85},
    { restaurante: 'Chef Peruano',data:'2024-05-19T21:27:48.838832Z',qtd: 5,produto:'Macarronada', bruto:250,liquido:217.5},
    { restaurante: 'Arabian',data:'2024-05-19T21:35:14.749953Z',qtd: 7,produto:'Tabule', bruto:175,liquido:152.25},
    { restaurante: 'Chef Peruano',data:'2024-05-19T21:43:09.715572Z',qtd: 1,produto:'Lomo Saltado', bruto:60,liquido:52.2},
    { restaurante: 'Chef chefinho',data:'2024-05-19T21:54:05.282280Z',qtd: 6,produto:'Frango italiano', bruto:192.00,liquido:167.04},


    
  ];
  
  return (
    <div >
      <div className="justify-center flex font-bold text-5xl pb-5">
        <h1>Faturamento Mensal</h1>
      </div>
      <div className="justify-center flex">
      <Box sx={{ height: 500, width: '50%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.restaurante + row.produto}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      </div>
      <div>
      <div className="justify-center flex font-bold text-5xl pb-5 pt-10">
        <h1>Produtos mais vendidos</h1>
        </div>
        <div className="justify-center flex">
        <Box sx={{ height: 500, width: '50%' }}>
        <DataGrid
          rows={rows2}
          columns={columns2}
          getRowId={(row) => row.restaurante + row.produto}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      </div>
      </div>
      <div className="justify-center flex font-bold text-5xl pt-10 pb-5">
        <h1>Demanda de pedidos</h1>
      </div>
      <div className="justify-center flex">
      <BarChart
  xAxis={[{ scaleType: 'band', data: ['Chef chefinho', 'Retrô Burguer', 'The Grill','Kyoko Sushi','Good Food','Arabian','Italian Pasta','Chinese','Chef Peruano','León'] }]}
  
  series={[{ data: [4, 3, 6,9,2,6,7,8,9,7] }]}
  width={1000}
  height={300}
/>

      </div>
    </div>
  );
};

export default Sobre;
