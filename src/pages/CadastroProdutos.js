import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

const CadastroProdutos = () => {

  const [image, setImage] = useState(null)
  const [nome_produto, setNomeProduto] = useState("")
  const [valor, setValor] = useState("")
  const [qtd_estoque, setQtd_estoque] = useState("")
  const [descricao, setDescricao] = useState("")
  const [restaurante, setRestaurante] = useState("")


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
    <div className='flex justify-center'>
      <form className='form-group' onSubmit={handleSubmit} >

      <label className="input input-bordered flex items-center gap-2 mb-4">
          <img src={image}/>
          <input
            type="file"
            className="grow"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>




        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="text"
            className="grow"
            placeholder="Nome do produto"
            name="nome_produto"
            value={nome_produto}
            onChange={(e) => setNomeProduto(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="number"
            className="grow"
            placeholder="Valor"
            name="valor"
            maxLength={6}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="number"
            className="grow"
            placeholder="Estoque"
            name="qtd_estoque"
            value={qtd_estoque}
            onChange={(e) => setQtd_estoque(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="textarea"
            className="grow"
            placeholder="descricao"
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="text"
            className="grow"
            placeholder="Insira o ID do Restaurante"
            name="restaurante"
            value={restaurante}
            onChange={(e) => setRestaurante(e.target.value)}
          />
        </label>
        <input
          className="m-2 rounded bg-cyan-950 px-10 py-2 text-white"
          type="submit"
          value="Cadastrar-se"
        />
      </form>
    </div>
  )
}

export default CadastroProdutos
