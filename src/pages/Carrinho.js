import React, { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { Link } from 'react-router-dom';

const Carrinho = () => {

    const { carrinho, aumentarQuantidade, diminuirQuantidade, calcularTotal } = useContext(CarrinhoContext);



  return (
    <div>
    <h1 className='text-5xl pb-10'>Carrinho de compras</h1>
    <div className='justify-center w-96'>
      
    {Object.values(carrinho).map((produto) => (
      <div key={produto.id}>
        <h1 className='text-4xl pb-10 font-bold'>{produto.nome_produto}</h1>
        <img className='pb-4 w-80' src={produto.image} alt={produto.nome_produto} />
        
        <p className='font-bold text-2xl'>Quantidade: {produto.quantidade}</p>
        <div className='sign-in-onboard__btnContainer '>
        <button className='m-2 rounded bg-cyan-950 px-4 py-2 text-white' onClick={() => diminuirQuantidade(produto.id)}>Diminuir quantidade</button>
        <button className='m-2 rounded bg-cyan-950 px-4 py-2 text-white'  onClick={() => aumentarQuantidade(produto.id)}>Aumentar quantidade</button>
        </div>
        {/* Renderize outros detalhes do produto aqui */}
      </div>
    ))}
    <div>
    <h1 className='pt-10 font-bold text-2xl'>Sumario: </h1>
    <h2 className='text-emerald-600 text-3xl pb-10 font-bold'>Total: R$ {calcularTotal()}</h2>
    </div>
    <div className='flex'>
    <Link to='/produtos'><button className='m-2 rounded bg-cyan-950 px-4 py-2 text-white'>Continuar Comprando</button></Link>
    <button className='m-2 rounded bg-cyan-950 px-4 py-2 text-white'>Finalizar Pedido</button>
    </div>
  </div>
  </div>
);
};

export default Carrinho;  