import React, { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { Link } from "react-router-dom";

const Carrinho = () => {
  const { carrinho, aumentarQuantidade, diminuirQuantidade, calcularTotal } =
    useContext(CarrinhoContext);

  return (
    <div className="" style={{ width: "50%", margin: "0 auto" }}>
      <h1 className="text-5xl pb-10">Carrinho de compras</h1>
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
                className="m-2 rounded bg-cyan-950 px-4 py-2 text-white"
                onClick={() => diminuirQuantidade(produto.id)}
              >
                Diminuir quantidade
              </button>
              <button
                className="m-2 rounded bg-cyan-950 px-4 py-2 text-white"
                onClick={() => aumentarQuantidade(produto.id)}
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
            <h1 className="pt-10 font-bold text-2xl">Sumario: </h1>
            <h2 className="text-emerald-600 text-3xl pb-10 ">
              Total: R$ {calcularTotal()}
            </h2>
          </div>
          <div className="flex">
            <Link to="/produtos">
              <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">
                Continuar Comprando
              </button>
            </Link>
            <Link to="/pedido">
              <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">
                Finalizar Pedido
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
