import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CadastroProdutos = () => {

  const [image, setImage] = useState(null)
  const [nome_produto, setNomeProduto] = useState("")
  const [valor, setValor] = useState("")
  const [qtd_estoque, setQtd_estoque] = useState("")
  const [descricao, setDescricao] = useState("")
  const [restaurante, setRestaurante] = useState("")
  console.log(nome_produto)


  const handleSubmit = async (event) => {
    event.preventDefault();
    let formfield = new FormData();
  
    if (nome_produto === "") {
      alert('Adicione um nome ao produto');
      return;
    } else {
      formfield.append('nome_produto', nome_produto);
    }
  
    if (valor === "") {
      alert('Adicione um valor ao produto');
      return;
    } else {
      formfield.append('valor', valor);
    }
  
    if (qtd_estoque === "") {
      alert('Adicione uma quantidade ao estoque');
      return;
    } else {
      formfield.append('qtd_estoque', qtd_estoque);
    }
  
    if (descricao === "") {
      alert('Adicione uma descrição ao produto');
      return;
    } else {
      formfield.append('descricao', descricao);
    }
  
    if (restaurante === "") {
      alert('Adicione uma categoria ao produto');
      return;
    } else {
      formfield.append('restaurante', restaurante);
    }
  
    if (image == null) {
      alert('Adicione uma imagem ao produto');
      return;
    } else {
      formfield.append('image', image);
    } 
  
    try {
      await axios.post('http://127.0.0.1:8000/produtos/', formfield);
      alert('Produto Registrado');
    } catch (error) {
      alert('Preencha os campos obrigatórios', error);
    }
  }
  
  
  

  

  return (
    <Box
    noValidate
    autoComplete="off"
    style={{ borderRadius: '30px' }}
  >
    <div className='flex justify-center'>
    <form className='form-group' onSubmit={handleSubmit} >

<label className="flex items-center mb-4">
    <img src={image}/>
    <TextField
      type="file"
      className="grow"
      name="image"
      onChange={(e) => setImage(e.target.files[0])}
      
      
    />
  </label>

  


  <label className=" flex items-center gap-2 mb-4">
  <TextField
   id="outlined-basic"
   className="grow"
   label="Nome do Produto*"
   placeholder='Insira o Nome do produto'
   value={nome_produto}
   name="nome_produto"
   onChange={(e) => setNomeProduto(e.target.value)}
   variant="filled" 
   InputProps={{
    style: { borderRadius: '10px' }
  }}/>
   
  </label>

  

  <label className=" flex items-center gap-2 mb-4">
    <TextField
    id="outlined-basic"
    label="Valor"
      type="number"
      className="grow"
      name="valor"
      maxLength={6}
      value={valor} 
      onChange={(e) => setValor(e.target.value)}
      variant='filled'
      InputProps={{
    style: { borderRadius: '10px' }
  }}/>
   
  </label>

  <label className=" flex items-center gap-2 mb-4">
    <TextField
    id='outlined-basic'
    label="Estoque"
      type="number"
      className="grow"
      name="qtd_estoque"
      value={qtd_estoque}
      onChange={(e) => setQtd_estoque(e.target.value)}
      variant='filled'
      InputProps={{
        style: { borderRadius: '10px' }
      }}
    />
  </label>

  <label className="flex items-center gap-2 mb-4">
    <TextField
      type="textarea"
      label="Descrição"
      className="grow"
      placeholder="Insira uma Descricao"
      name="descricao"
      value={descricao}
      onChange={(e) => setDescricao(e.target.value)}
      variant='filled'
      InputProps={{
        style: { borderRadius: '10px' }
      }}
    />
  </label>

  <label className=" flex items-center gap-2 mb-4">
    <TextField
      type="text"
      label="Identidade do restaurante*"
      className="grow"
      placeholder="Insira o ID do Restaurante"
      name="restaurante"
      value={restaurante}
      onChange={(e) => setRestaurante(e.target.value)}
      variant='filled'
      InputProps={{
        style: { borderRadius: '10px' }
      }}
    />
  </label>
  <input
    className="bcolor buttonselect px-10 py-2 text-white"
    type="submit"
    value="Cadastrar-se"
  />
</form>
    
    </div>
  </Box>
);
}
    
 
export default CadastroProdutos
