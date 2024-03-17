import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Restaurantes = () => {

  const [produtos, setProdutos] = useState([])


  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/produtos/')
        setProdutos(response.data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProdutos()
  }, [])




  return (
    <div>
    {produtos.map((produto) => (
      <div key={produto.id}>
        <h2>{produto.nome_produto}</h2>
        <p>{produto.descricao}</p>
        {/* Outros detalhes do produto aqui */}
      </div>
    ))}
  </div>
  )
}

export default Restaurantes
