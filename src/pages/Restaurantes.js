import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Restaurantes = () => {

  const [produtos, setProdutos] = useState([])
  const [carrinho, setCarrinho] = useState([]) // Adiciona estado para o carrinho

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

  const adicionarAoCarrinho = (produto) => { // Função para adicionar produtos ao carrinho
    setCarrinho([...carrinho, produto])
  }

  return (
    <div className='justify-center w-96'>
      {produtos.map((produto) => (
        <div key={produto.id} className='pt-10 pb-4'>
          <h1 className='text-4xl pb-10'>{produto.nome_produto}</h1>
          <img src={produto.image} alt={produto.nome_produto} />
          <h2 className='text-2xl text-emerald-600'> Preço: R${produto.valor}</h2>
          <h2>Quantidade em estoque: {produto.qtd_estoque}</h2>
          <p> Descrição: <br /> {produto.descricao}</p>
          <p> Categoria:  {produto.categoria}</p>
          
          
          <button className='m-2 rounded bg-cyan-950 px-10 py-2 text-white' onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho</button> {/* Botão para adicionar ao carrinho */}
        </div>
      ))}
    </div>
  )
}

export default Restaurantes
