import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Produtos = () => {

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
    console.log(produto)
  }

  return (
    <div>
      <div className='pt-10'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="m-2 rounded bg-cyan-700 px-10 py-2 text-white " onClick={()=>document.getElementById('my_modal_1').showModal()}>Mais informações  &#128049;</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Olá internauta!</h3>
    <p className="py-4">Esta é a página de produtos! Você pode adquirir os seus produtos aqui! &#128049;</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="">Fechar</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
      
    <div className='justify-center w-96'>
      {produtos.map((produto) => (
        <div key={produto.id} className='pt-10 pb-4 '>
          <h1 className='text-4xl pb-10 font-bold'>{produto.nome_produto}</h1>
          <img className='pb-4' src={produto.image} alt={produto.nome_produto} />
          <h2 className='text-2xl text-emerald-600 font-bold'> Preço: R$ {produto.valor}</h2>
          <h2>Quantidade em estoque: {produto.qtd_estoque}</h2>
          <p> Descrição: <br /> {produto.descricao}</p>
          <p> Categoria:  {produto.categoria}</p>
          <p>Código: {produto.id}</p>
          
          
          <button className='m-2 rounded bg-cyan-950 px-10 py-2 text-white' onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho</button> {/* Botão para adicionar ao carrinho */}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Produtos
