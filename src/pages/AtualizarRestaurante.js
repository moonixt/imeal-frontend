import React, {useState} from 'react'
import axios from 'axios'

const AtualizarRestaurante = () => {
    const [id, setId] = useState('')
    const [image, setImage] = useState(null)
    const [nome_restaurante, setNomeRestaurante] = useState("")
    const [logradouro_restaurante, setLogradouro_restaurante] = useState("")
    const [numero_restaurante, setNumero_restaurante] = useState("")
    const [complemento_restaurante, setComplemento_restaurante] = useState("")
    const [ponto_ref_restaurante, setPonto_ref_restaurante] = useState("")
    const [bairro_restaurante, setBairro_restaurante] = useState("")
    const [cidade_restaurante, setCidade_restaurante] = useState("")
    const [uf_restaurante, setUf_restaurante] = useState("")
    const [cep_restaurante, setCep_restaurante] = useState("")
    const [descricao_restaurante, setDescricao_restaurante] =useState("")
    const [categoria_restaurante, setCategoria_restaurante] =useState("")
  
    const handleUpdate = async (id) => {
        let formfield = new FormData();
      
        if (image === "") {
            alert('Atualize a foto do produto');
            return;
          } else {
            formfield.append('image', image);
          }
        formfield.append('nome_restaurante', nome_restaurante);
        formfield.append('logradouro_restaurante', logradouro_restaurante);
        if (numero_restaurante === "") {
            alert('Adicione uma novo numero ao restaurante');
            return;
          } else {
            formfield.append('numero_restaurante', numero_restaurante);
          }
          if (complemento_restaurante === "") {
            alert('Insira um novo complemento ao restaurante');
            return;
          } else {
            formfield.append('complemento_restaurante', complemento_restaurante);
          }

          if (ponto_ref_restaurante === "") {
            alert('Insira um novo ponto de referencia ao restaurante');
            return;
          } else {
            formfield.append('ponto_ref_restaurante', ponto_ref_restaurante);
          }
        formfield.append('bairro_restaurante', bairro_restaurante);
        formfield.append('cidade_restaurante', cidade_restaurante);
        formfield.append('uf_restaurante', uf_restaurante);
        formfield.append('cep_restaurante', cep_restaurante);
        formfield.append('descricao_restaurante', descricao_restaurante);
        formfield.append('categoria_restaurante', categoria_restaurante);
        
      
        try {
          await axios.put(`http://127.0.0.1:8000/restaurantes/${id}/`, formfield);
          alert('Restaurante atualizado');
        } catch (error) {
          alert('Erro ao atualizar o restaurante', error);
        }
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdate(id);
      }
  
    return (
      <div className='flex justify-center'>
        <form className='form-group' onSubmit={handleSubmit} >

            
        <label className="input input-bordered flex items-center gap-2 mb-4">
    <input
      type="text"
      className="grow"
      placeholder="Insira o ID do restaurante"
      name="restaurante"
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
              placeholder="Nome do restaurante"
              name="nome_restaurante"
              value={nome_restaurante}
              onChange={(e) => setNomeRestaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Insira o logradouro"
              name="logradouro_restaurante"
              value={logradouro_restaurante}
              onChange={(e) => setLogradouro_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="number"
              className="grow"
              placeholder="Insira o numero do restaurante"
              name="numero"
              value={numero_restaurante}
              onChange={(e) => setNumero_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Insira o complemento"
              name="complemento_restaurante"
              value={complemento_restaurante}
              onChange={(e) => setComplemento_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="ponto de referencia"
              name="ponto_ref_restaurante"
              value={ponto_ref_restaurante}
              onChange={(e) => setPonto_ref_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Insira o Bairro"
              name="bairro_restaurante"
              value={bairro_restaurante}
              onChange={(e) => setBairro_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Insira a cidade"
              name="cidade_restaurante"
              value={cidade_restaurante}
              onChange={(e) => setCidade_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Insira o UF"
              name="uf_restaurante"
              value={uf_restaurante}
              onChange={(e) => setUf_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Insira o CEP"
              name="cep_restaurante"
              value={cep_restaurante}
              onChange={(e) => setCep_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="textfield"
              className="grow"
              placeholder="Insira uma descrição de seu restaurante"
              name="descricao_restaurante"
              value={descricao_restaurante}
              onChange={(e) => setDescricao_restaurante(e.target.value)}
            />
          </label>
  
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="textfield"
              className="grow"
              placeholder="Insira um ID de categoria de seu restaurante"
              name="descricao_restaurante"
              value={categoria_restaurante}
              onChange={(e) => setCategoria_restaurante(e.target.value)}
            />
          </label>
          <input
            className="m-2 rounded bg-cyan-950 px-10 py-2 text-white"
            type="submit"
            value="Atualizar"
          />
        </form>
      </div>
    )
  }

export default AtualizarRestaurante
