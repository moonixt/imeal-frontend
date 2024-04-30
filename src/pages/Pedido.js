import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CarrinhoContext } from '../context/CarrinhoContext'
import axios from 'axios'
import notification_sound from './CSS/notification_sound.mp3'
import GooglePayButton from '@google-pay/button-react'
import addNotification from 'react-push-notification';

const Pedido = () => {
  const { total } = useContext(CarrinhoContext);

  
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

  const handleEmail_preparando = () => {
    axios.get('http://localhost:8000/pedido-finalizado/', {
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

const [pedido_finalizado, setPedido_Finalizado] = useState()
const redirecionar_status = useNavigate();
const audio = new Audio(notification_sound)
const finalizarPedido_Status = () => {
  setPedido_Finalizado(true);
  audio.play()
  setTimeout(() => {
    redirecionar_status('/pedido-finalizado');
  }, 5800);
  handleEmail();
  handleEmail_preparando();
  addNotification({
    title: 'Finalizando Pedido ',
    subtitle: "Oba! Está quase lá",
    message: "Logo finalizaremos",
    theme: "green",
    closeButton: "X",
    duration: 10000, //optional, default: 5000,
    native:true        
  })
}






  return (
    <div className='alinhamento-endereco'>
      <div>
      {pedido_finalizado && (
      <div className="" style={{ width: "50%", margin: "0 auto" }}>
        <div role="alert" className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="loading loading-dots loading-xs stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="">Finalizando seu pedido! &#10084;</span>
        </div>
      </div>
    )}
      <h1 className='flex pb-20 font-black text-5xl justify-center'>Prosseguir com pagamento</h1>
      </div>
      <div className='flex justify-center'>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"></span>
   
  </div>
  <div>
        <h1 className='text-4xl'>Subtotal</h1>
        <h2 className="text-emerald-600 text-4xl pb-5 ">
          Valor total: R$ {total}
        </h2>
      </div>
  {/* <select className="select select-bordered">
    <option disabled selected>Selecione o tipo de entrega</option>
    <option>Entregar no endereço</option>
    <option>Retirada</option>
  </select> */}
  <div className="label">
   
  </div>
</label>
      </div>
      <div className='flex justify-center'>
      <label className="form-control w-full max-w-xs">
      <GooglePayButton
  environment="TEST"
  buttonLocale="pt"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Imeal',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: total.toString(), // Use o valor de total aqui
      currencyCode: 'BRL',
      countryCode: 'BR',
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION'],
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('Success', paymentRequest);
  }}
  onPaymentAuthorized={paymentData => {
    console.log('Payment Authorised Success', paymentData);
    finalizarPedido_Status(); // Chame a função aqui
    return { transactionState: 'SUCCESS'}
  }}
  existingPaymentMethodRequired='false'
  buttonColor='black'
  buttonType='pay'
/>



 

  <div className="label">
   
  </div>
</label>
      </div>
      
    </div>
  )
}

export default Pedido
