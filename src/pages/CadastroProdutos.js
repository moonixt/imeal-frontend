import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

const CadastroProdutos = () => {

  const [nome_produto, setNomeProduto] = useState("")
  const [valor, setValor] = useState("")
  const [qtd_estoque, setQtd_estoque] = useState("")
  const [descricao, setDescricao] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formfield = new FormData

    formfield.append('nome_produto', nome_produto)
    formfield.append('valor', valor)
    formfield.append('qtd_estoque', qtd_estoque)
    formfield.append('descricao', descricao)

try {
    await axios.post('http://127.0.0.1:8000/produtos/', formfield)
    alert('Produto Registrado')
} catch (error) {
    alert('Preencha os campos obrigatórios',error);
}
    
  }
    

  

  return (
    <div>
      <form className='form-group' onSubmit={handleSubmit} >
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
