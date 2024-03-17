import React from 'react'

const Carrinho = ({ carrinho }) => {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {carrinho.map((item) => (
        <div key={item.id}>
          <h3>{item.nome_produto}</h3>
          <p>Preço: R${item.valor}</p>
          {/* Outros detalhes do item aqui */}
        </div>
      ))}
    </div>
  )
}

export default Carrinho
