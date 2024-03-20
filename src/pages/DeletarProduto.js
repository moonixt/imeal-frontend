import React, { useState } from 'react'
import axios from 'axios'

const DeletarProduto = () => {
  const [id, setId] = useState('')

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/produtos/${id}/`)
      alert('Produto excluído')
    } catch (error) {
      alert('Erro ao excluir o produto', error)
    }
  }

  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <input
          type="text"
          className="grow"
          placeholder="Insira o ID"
          name="deletar"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <button onClick={handleDelete}>Deletar Produto</button>
    </div>
  )
}

export default DeletarProduto
