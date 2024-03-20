import React,{useState} from 'react'
import axios from 'axios'

const AtualizarProduto = () => {

  const [id, setId] = useState('')
  const [image, setImage] = useState("")
  const [nome_produto, setNomeProduto] = useState("")
  const [valor, setValor] = useState("")
  const [qtd_estoque, setQtd_estoque] = useState("")
  const [descricao, setDescricao] = useState("")
  const [categoria, setCategoria] = useState("")
    
    const handleUpdate = async (id) => {
        let formfield = new FormData();
      
        if (nome_produto === "") {
            alert('Atualize o nome do produto');
            return;
          } else {
            formfield.append('nome_produto', nome_produto);
          }
        formfield.append('valor', valor);
        formfield.append('qtd_estoque', qtd_estoque);
        if (descricao === "") {
            alert('Adicione uma nova descrição ao produto');
            return;
          } else {
            formfield.append('descricao', descricao);
          }
          if (categoria === "") {
            alert('Insira a nova categoria ao produto');
            return;
          } else {
            formfield.append('categoria', categoria);
          }
        formfield.append('image', image);
        
      
        try {
          await axios.put(`http://127.0.0.1:8000/produtos/${id}/`, formfield);
          alert('Produto atualizado');
        } catch (error) {
          alert('Erro ao atualizar o produto', error);
        }
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdate(id);
      }

  return (
    <div>
      <form className='form-group' onSubmit={handleSubmit} >

      <label className="input input-bordered flex items-center gap-2 mb-4">
        <input
          type="text"
          className="grow"
          placeholder="Insira o ID"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>

      

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
      type="text"
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
      placeholder="categoria"
      name="categoria"
      value={categoria}
      onChange={(e) => setCategoria(e.target.value)}
    />
  </label>
  <input
    className="m-2 rounded bg-cyan-950 px-10 py-2 text-white"
    type="submit"
    value="Alterar"
  />
</form>
      
    </div>
  )
}

export default AtualizarProduto
