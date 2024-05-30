import React, { createContext, useState, useEffect } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState({});
  const [total, setTotal] = useState(0);
  const [cupom, setCupom] = useState(''); // State for coupon code
  const [deliveryOption, setDeliveryOption] = useState(''); // New state for delivery option

  useEffect(() => {
    const novoTotal = Object.values(carrinho).reduce(
      (total, produto) => total + produto.valor * produto.quantidade,
      0
    );

    const quantidadeTotal = Object.values(carrinho).reduce(
      (quantidade, produto) => quantidade + produto.quantidade,
      0
    );

    // Apply discount based on coupon code
    if (cupom === 'DESCONTO10') {
      const descontoPercentual = 0.1; // 10% discount
      setTotal(novoTotal * (1 - descontoPercentual));
    } else if (cupom === 'DESCONTO20') {
      const descontoPercentual = 0.2; // 20% discount
      setTotal(novoTotal * (1 - descontoPercentual));
    } else if (cupom === 'DESCONTO50') {
      const descontoPercentual = 0.5; // 50% discount
      setTotal(novoTotal * (1 - descontoPercentual));
    } else {
      setTotal(novoTotal);
    }

    // Include delivery fee when delivery option is selected
    if (deliveryOption === 'Entregar') {
      setTotal(total + 12); // Add delivery fee of R$12
    }

    console.log('Quantidade total de produtos:', quantidadeTotal);
  }, [carrinho, cupom, deliveryOption]);

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

  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
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
        deliveryOption,
        handleDeliveryOptionChange,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};