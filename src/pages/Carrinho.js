import React, { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';

const Carrinho = () => {

    const { carrinho, aumentarQuantidade, diminuirQuantidade, calcularTotal } = useContext(CarrinhoContext);



  return (
    <div className='justify-center w-96'>
    {Object.values(carrinho).map((produto) => (
      <div key={produto.id}>
        <h1 className='text-4xl pb-10 font-bold'>{produto.nome_produto}</h1>
        <img className='pb-4' src={produto.image} alt={produto.nome_produto} />
        
        <p className='font-bold text-4xl'>Quantidade: {produto.quantidade}</p>
        <div className='sign-in-onboard__btnContainer '>
        <button className='m-2 rounded bg-cyan-950 px-4 py-2 text-white' onClick={() => diminuirQuantidade(produto.id)}>Diminuir quantidade</button>
        <button className='m-2 rounded bg-cyan-950 px-4 py-2 text-white'  onClick={() => aumentarQuantidade(produto.id)}>Aumentar quantidade</button>
        </div>
        {/* Renderize outros detalhes do produto aqui */}
      </div>
    ))}
    <h2 className='pt-10 text-emerald-600 text-4xl pb-10 font-bold'>Valor total: R$ {calcularTotal()}</h2>
  </div>
);
};

export default Carrinho;