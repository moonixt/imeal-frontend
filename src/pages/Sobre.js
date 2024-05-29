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
      editable: false,
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
      editable: false,
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
      editable: false,
    },
    
    {
      field:'produto',
      headerName: 'Produto',
      width: 150,
      sortable: true,
      editable: false,
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
      editable: false,
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
    { restaurante: 'Retrô Burguer',qtd: 2, bruto:'R$ ' + 100,liquido: 'R$ ' +87},
    { restaurante: 'Good Food',qtd: 3, bruto:'R$ ' + 105,liquido: 'R$ ' +91.35},
    { restaurante: 'Kyoko Sushi',qtd: 2, bruto:'R$ ' + 300,liquido:'R$ ' +261},
    { restaurante: 'Chinese',qtd: 1, bruto:'R$ ' +55,liquido:'R$ ' +47.85},
    { restaurante: 'Chef Peruano',qtd: 5, bruto:'R$ ' +250,liquido:'R$ ' +217.5},
    { restaurante: 'Arabian',qtd: 7, bruto:'R$ ' +175,liquido:'R$ ' +152.25},
    { restaurante: 'Chef Peruano',qtd: 1, bruto:'R$ ' +60,liquido:'R$ ' +52.2},
    { restaurante: 'Chef chefinho',qtd: 6, bruto:'R$ ' +192.00,liquido:'R$ ' +167.04},


    
  ];

  const rows2 = [
    { restaurante: 'Retrô Burguer',data:'2024-05-19T20:28:35.639574Z',qtd: 2,produto:'Jordan Burguer', bruto:'R$ ' + 100,liquido:'R$ ' +87},
    { restaurante: 'Good Food',data:'2024-05-19T21:15:34.601658Z',qtd: 3,produto:'Baião de dois', bruto:'R$ ' + 105,liquido:'R$ ' +91.35},
    { restaurante: 'Kyoko Sushi',data:'2024-05-19T21:21:46.897191Z',qtd: 2,produto:'Combo Sushi', bruto:'R$ ' + 300,liquido:'R$ ' +261},
    { restaurante: 'Chinese',data:'2024-05-19T21:22:10.060393Z',qtd: 1,produto:'Frango Xadrez', bruto:'R$ ' + 55,liquido:'R$ ' +47.85},
    { restaurante: 'Chef Peruano',data:'2024-05-19T21:27:48.838832Z',qtd: 5,produto:'Macarronada', bruto:'R$ ' + 250,liquido:'R$ ' +217.5},
    { restaurante: 'Arabian',data:'2024-05-19T21:35:14.749953Z',qtd: 7,produto:'Tabule', bruto:'R$ ' + 175,liquido:'R$ ' +152.25},
    { restaurante: 'Chef Peruano',data:'2024-05-19T21:43:09.715572Z',qtd: 1,produto:'Lomo Saltado', bruto:'R$ ' + 60,liquido:'R$ ' +52.2},
    { restaurante: 'Chef chefinho',data:'2024-05-19T21:54:05.282280Z',qtd: 6,produto:'Frango italiano', bruto:'R$ ' + 192.00,liquido:'R$ ' +167.04},


    
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
          getRowId={(row) => row.restaurante +row.bruto}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          
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
          pageSizeOptions={[10]}
         
        />
      </Box>
      </div>
      </div>
      <div className="justify-center flex font-bold text-5xl pt-10 pb-5">
        <h1>Demanda de pedidos</h1>
      </div>
      <div className="justify-center flex">
      <BarChart
  xAxis={[{ 
    scaleType: 'band', data: ['Chef chefinho', 'Retrô Burguer', 'The Grill','Kyoko Sushi','Good Food','Arabian','Italian Pasta','Chinese','Chef Peruano','León'],
    colorMap: {
      type: 'ordinal',
      colors: ['#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#08589e']}}]}
  
  series={[{ data: [4, 3, 6,9,2,6,7,8,9,7] }]}
  width={2000}
  height={600}
  barLabel="value"
/>

      </div>
    </div>
  );
};

export default Sobre;
