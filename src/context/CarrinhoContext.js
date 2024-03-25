import React, {createContext, useState} from 'react'

export const CarrinhoContext = createContext();  

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState({});
  
    const aumentarQuantidade = (id) => {
      setCarrinho({
        ...carrinho,
        [id]: {
          ...carrinho[id],
          quantidade: carrinho[id].quantidade + 1,
        },
      });
    };
  
    const diminuirQuantidade = (id) => {
      if (carrinho[id].quantidade > 1) {
        setCarrinho({
          ...carrinho,
          [id]: {
            ...carrinho[id],
            quantidade: carrinho[id].quantidade - 1,
          },
        });
      } else {
        const { [id]: _, ...restoDoCarrinho } = carrinho;
        setCarrinho(restoDoCarrinho);
      }
    };

    const calcularTotal = () => {
        return Object.values(carrinho).reduce((total, produto) => total + produto.valor * produto.quantidade, 0);
      };
  
    return (
      <CarrinhoContext.Provider value={{ carrinho, setCarrinho, aumentarQuantidade, diminuirQuantidade, calcularTotal }}>
        {children}
      </CarrinhoContext.Provider>
    );
  };
  
