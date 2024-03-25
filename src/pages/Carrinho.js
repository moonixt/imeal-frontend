import React, { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';

const Carrinho = () => {

    const { carrinho, aumentarQuantidade, diminuirQuantidade, calcularTotal } = useContext(CarrinhoContext);



  return (
    <div className='justify-center w-96'>
    {Object.values(carrinho).map((produto) => (
      <div key={produto.id}>
        <img className='pb-4' src={produto.image} alt={produto.nome_produto} />
        <h2>{produto.nome_produto}</h2>
        <p>Quantidade: {produto.quantidade}</p>
        <button onClick={() => aumentarQuantidade(produto.id)}>Aumentar quantidade</button>
        <button onClick={() => diminuirQuantidade(produto.id)}>Diminuir quantidade</button>
        {/* Renderize outros detalhes do produto aqui */}
      </div>
    ))}
    <h2 className='pt-10 text-emerald-600 font-bold'>Valor total: R$ {calcularTotal()}</h2>
  </div>
);
};

export default Carrinho;