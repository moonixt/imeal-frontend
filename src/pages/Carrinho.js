import React, { useContext, useState } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { Link, useNavigate } from "react-router-dom";
import notificationsound from "./CSS/notification_sound.mp3";
import awaitcat from "./CSS/awaiting.gif";
import axios from "axios";
import addNotification from "react-push-notification";
import { Notifications } from "react-push-notification";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";

const Carrinho = () => {
  const { carrinho, aumentarQuantidade, diminuirQuantidade, total, cupom, setCupom, deliveryOption,
    handleDeliveryOptionChange, } =
    useContext(CarrinhoContext);


  const aplicarcupom = async (event) => {
    event.preventDefault();

    // Atualize o valor total com o desconto aplicado
  };

  const [AddQuantidade, setAddQuantidade] = useState(false);
  const addquantidade = () => {
    setAddQuantidade(true);
    setTimeout(() => {
      setAddQuantidade(false);
    }, 5000);
  };

  const [DdQuantidade, setDdQuantidade] = useState(false);
  const redquantidade = () => {
    setDdQuantidade(true);
    setTimeout(() => {
      setDdQuantidade(false);
    }, 5000);
  };

  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
  const redirecionar = useNavigate();
  const audio = new Audio(notificationsound);
  const finalizarPedido = () => {
    

    const restaurantes = Object.values(carrinho).map((produto) => produto.restaurante);
    
    const nomedoproduto = Object.values(carrinho).map((produto) => produto.nome_produto);
  const quantidadeTotal = Object.values(carrinho).reduce(
    (quantidade, produto) => quantidade + produto.quantidade,
    0
  );
  const todosDoMesmoRestaurante = restaurantes.every((id) => id === restaurantes[0]);

  if (!todosDoMesmoRestaurante) {
    alert('Erro: Não é possível finalizar o pedido com produtos de restaurantes diferentes.');
    return;
  }
  
  


  const PostarPedido = async () => {
    try {
      // Faz a requisição POST para salvar os produtos no banco
      await axios.post('http://127.0.0.1:8000/Pedidos/', { produtos: carrinho, valor_total: total, restaurante:restaurantes[0], qtd_total: quantidadeTotal,
        prod_nome:nomedoproduto,
       });
      console.log('Pedido finalizado com sucesso!');
      // Redireciona o usuário para a página de pedido confirmado
      // (você pode usar o hook de navegação ou outro método de redirecionamento)
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error);
    }
  };
  
  
    setPedidoConfirmado(true);
    audio.play();
    setTimeout(() => {
      redirecionar("/pedido");
    }, 5800);
    addNotification({
      title: "Confirmando pedido  ",
      subtitle: "Oba! Está quase lá",
      message: "Logo finalizaremos",
      theme: "green",
      closeButton: "X",
      duration: 10000, //optional, default: 5000,
      native: true,
    })
    PostarPedido();
      


  };

  return (
    <div>
      {pedidoConfirmado && (
        <div className="" style={{ width: "50%", margin: "0 auto" }}>
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="loading loading-dots loading-xs stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="">Confirmando seu pedido! &#10084;</span>
          </div>
        </div>
      )}

      <div className="alinhamento-endereco">
        <h1 className="text-5xl pb-10 justify-center flex ">
          Carrinho de compras
        </h1>
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
                <p className="text-amber-500">
                  Código do produto: {produto.id}
                </p>
                <p className="font-bold text-2xl">
                  Quantidade: {produto.quantidade}
                </p>
                <div className="sign-in-onboard__btnContainer ">
                  <button
                    className="bcolor px-4 py-2 text-white"
                    onClick={() => {
                      diminuirQuantidade(produto.id);
                      redquantidade();
                    }}
                  >
                    <DoDisturbOnIcon />
                  </button>
                  <button
                    className="bcolor  px-4 py-2 text-white"
                    onClick={() => {
                      aumentarQuantidade(produto.id);
                      addquantidade();
                    }}
                  >
                    <AddCircleIcon />
                  </button>
                </div>
                {/* Renderize outros detalhes do produto aqui */}
              </div>
            ))}
            <div>
              {AddQuantidade && (
                <div
                  role="alert"
                  className="alert alert-info"
                  style={{ width: "100%", margin: "0 auto" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Aumentou quantidade.</span>
                </div>
              )}
              <div>
                {DdQuantidade && (
                  <div
                    role="alert"
                    className="alert alert-error"
                    style={{ width: "100%", margin: "0 auto" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-current shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Reduziu quantidade.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div>
            <form className=" font-bold text-2xl justify-center flex" onSubmit={aplicarcupom}>
            <input  type="text"  placeholder="Digite o código do cupom" // Adicione manipuladores de eventos para capturar o valor do cupom
             value={cupom}
             onChange={(e) => setCupom(e.target.value)} />
             

            </form>
            <div className="font-bold text-2xl justify-center flex pt-10 pb-10">
            <select className="select select-bordered " onChange={handleDeliveryOptionChange}>
    <option disabled selected>Escolha a modalidade</option>
    <option >Retirar no local</option>
    <option >Entregar</option>
    </select>
            </div>
            
         
            <h1 className=" font-bold text-2xl justify-center flex">
              Subtotal:{" "}
            </h1>
            <h1 className="font-bold text-2xl justify-center flex">Frete: R$ 12 </h1>
            <h2 className="text-emerald-600 text-3xl pb-10 justify-center flex">
              R$ {total}
            </h2>
          </div>
          <div className="flex justify-center">
            <Link to="/produtos">
              <button className="m-2 bcolor px-4 py-2 text-white">
                Continuar Comprando
              </button>
            </Link>

            <button
              className="m-2 bcolor px-4 py-2 text-white"
              onClick={finalizarPedido}
            >
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
