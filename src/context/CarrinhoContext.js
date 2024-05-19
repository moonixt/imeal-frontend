import React, { createContext, useState, useEffect } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState({});
  const [total, setTotal] = useState(0);
  const [cupom, setCupom] = useState(''); // Estado para o código do cupom
 
  useEffect(() => {
    // Lógica para calcular o novo total com base no cupom
    const novoTotal = Object.values(carrinho).reduce(
      (total, produto) => total + produto.valor * produto.quantidade,
      0
    );

    const quantidadeTotal = Object.values(carrinho).reduce(
      (quantidade, produto) => quantidade + produto.quantidade,
      0
    );

    // Aplicar desconto com base no código do cupom
    if (cupom === 'DESCONTO10') {
      const descontoPercentual = 0.1; // 10% de desconto
      setTotal(novoTotal * (1 - descontoPercentual));
    } else if (cupom === 'DESCONTO20') {
      const descontoPercentual = 0.2; // 20% de desconto
      setTotal(novoTotal * (1 - descontoPercentual));
    } else if (cupom === 'DESCONTO50') {
      const descontoPercentual = 0.5; // 50% de desconto
      setTotal(novoTotal * (1 - descontoPercentual));
    } else {
      setTotal(novoTotal);
    }
    console.log('Quantidade total de produtos:', quantidadeTotal);

  }, [carrinho, cupom]);

  

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
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        total,
        cupom,
        setCupom,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
