import React, {createContext, useState, useEffect} from 'react'

export const CarrinhoContext = createContext();  

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState({});
    const [total, setTotal] = useState(0); // Adicione esta linha

    useEffect(() => {
      const novoTotal = Object.values(carrinho).reduce((total, produto) => total + produto.valor * produto.quantidade, 0);
      setTotal(novoTotal);
    }, [carrinho]); // Adicione este bloco
  
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

   
    return (
      <CarrinhoContext.Provider value={{ carrinho, setCarrinho, aumentarQuantidade, diminuirQuantidade, total }}>
        {children}
      </CarrinhoContext.Provider>
    );
  };
