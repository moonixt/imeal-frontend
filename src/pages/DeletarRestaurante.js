import React, { useState } from 'react'
import axios from 'axios'

const DeletarRestaurante = () => {
    const [id, setId] = useState('')

    const handleDelete = async () => {
      try {
        await axios.delete(`http://127.0.0.1:8000/restaurantes/${id}/`)
        alert('restaurante excluído')
      } catch (error) {
        alert('Erro ao excluir o restaurante', error)
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
        <button className='rounded m-2 bg-cyan-950 text-white' onClick={handleDelete}>Deletar restaurante</button>
      </div>
    )
  }

export default DeletarRestaurante
