import React, { useContext, useState, } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { Link, useNavigate } from "react-router-dom";
import notificationsound from './CSS/notification_sound.mp3'
import awaitcat from './CSS/awaiting.gif'
import axios from "axios";
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';

const Carrinho = () => {

const { carrinho, aumentarQuantidade, diminuirQuantidade, total } =
    useContext(CarrinhoContext);

  const handleEmail = () => {
      axios.get('http://localhost:8000/confirmar/', {
          headers: {
              'Content-Type': 'application/json',
              // 'Authorization': 'Token seu_token_aqui' // se você estiver usando autenticação
          },
      })
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.error('Erro:', error);
      });
  };






const [AddQuantidade, setAddQuantidade] = useState(false);
const addquantidade = () => {
  setAddQuantidade(true);
  setTimeout(() => {
    setAddQuantidade(false);
  }, 1000);

}

const [DdQuantidade, setDdQuantidade] = useState(false);
const redquantidade = () => {
  setDdQuantidade(true);
  setTimeout(() => {
    setDdQuantidade(false);
  }, 1000);
}

const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
const redirecionar = useNavigate();
const audio = new Audio(notificationsound)
const finalizarPedido = () => {
  setPedidoConfirmado(true);
  audio.play()
  setTimeout(() => {
    redirecionar('/pedido');
  }, 5800);
  handleEmail();
  addNotification({
    title: 'Confirmando pedido  ',
    subtitle: "Oba! Está quase lá",
    message: "Logo finalizaremos",
    theme: "green",
    closeButton: "X",
    duration: 10000, //optional, default: 5000,
    native:true        
  })
}


  
  return (
    <div>
      
    {pedidoConfirmado && (
      <div className="" style={{ width: "50%", margin: "0 auto" }}>
        <div role="alert" className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="loading loading-dots loading-xs stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="">Confirmando seu pedido! &#10084;</span>
        </div>
      </div>
    )}
    <div>
      {AddQuantidade && (
        <div role="alert" className="alert alert-info" style={{ width: "50%", margin: "0 auto" }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Aumentou quantidade.</span>
      </div>
      )}
      <div>
      {DdQuantidade && (
        <div role="alert" className="alert alert-error" style={{ width: "50%", margin: "0 auto" }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Reduziu quantidade.</span>
      </div>
      )}
      </div>
    </div>
      <h1 className="text-5xl pb-10 justify-center flex">Carrinho de compras</h1>
      <div id="layout" className="justify-center">
        <div>
        {Object.values(carrinho).map((produto) => (
          <div className="centro" key={produto.id}>
            <img
              className="pb-4 rounded-3xl"
              src={produto.image}
              alt={produto.nome_produto}
              style={{ width: "150px", height: "150px" }}
            />
            <h1 className="font-bold">{produto.nome_produto}</h1>
            <h2 className="text-emerald-600"> Preço: R$ {produto.valor}</h2>
            <p>Restaurante: {produto.nome_restaurante}</p>
            <p className="font-bold">
              Identidade de restaurante: {produto.restaurante}
            </p>
            <p className="text-amber-500">Código do produto: {produto.id}</p>
            <p className="font-bold text-2xl">
              Quantidade: {produto.quantidade}
            </p>
            <div className="sign-in-onboard__btnContainer ">
              <button
                className="bcolor px-4 py-2 text-white"
                onClick={() => {diminuirQuantidade(produto.id);redquantidade();}}
              >
                Diminuir quantidade
              </button>
              <button
                className="bcolor  px-4 py-2 text-white"
                onClick={() => {aumentarQuantidade(produto.id); addquantidade();}}


              >
                Aumentar quantidade
              </button>
            </div>
            {/* Renderize outros detalhes do produto aqui */}
          </div>
        ))}
        </div>
        <div className="suma">
          <div>
            <img src={awaitcat} style={{ width: "50%", margin: "0 auto" }}></img>
            <h1 className="pt-10 font-bold text-2xl">Sumario: </h1>
            <h2 className="text-emerald-600 text-3xl pb-10 ">
              Total: R$ {total}
            </h2>
          </div>
          <div className="flex">
            <Link to="/produtos">
              <button className="m-2 bcolor px-4 py-2 text-white">
                Continuar Comprando
              </button>
            </Link>
            
              <button className="m-2 bcolor px-4 py-2 text-white" onClick={finalizarPedido}>
             
                Confirmar Pedido
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
