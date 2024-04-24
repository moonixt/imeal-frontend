import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const handleEmail_aguardando = () => {
  axios.get('http://localhost:8000/pedido-aguardando/', {
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

const StatusAguardando = () => {
  handleEmail_aguardando();
}

const handleEmail_pagamentoConfirmado = () => {
  axios.get('http://localhost:8000/pedido-pagamento-confirmado/', {
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


const StatusConfirmado = () => {
  handleEmail_pagamentoConfirmado();
}


const handleEmail_separacao = () => {
  axios.get('http://localhost:8000/pedido-separacao/', {
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

const StatusSeparacao = () => {
  handleEmail_separacao();
}

const handleEmail_faturado = () => {
  axios.get('http://localhost:8000/pedido-faturado/', {
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


const StatusFaturado = () => {
  handleEmail_faturado();
}

const handleEmail_entrega = () => {
  axios.get('http://localhost:8000/pedido-entrega/', {
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


const StatusEntrega = () => {
  handleEmail_entrega();
}


const handleEmail_concluido = () => {
  axios.get('http://localhost:8000/pedido-concluido/', {
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


const StatusConcluido = () => {
  handleEmail_concluido();
}



const StatusPedido = () => {
  return (
    <div>
      <div className='justify-center flex font-bold text-5xl'>
        <h1>Status do pedido</h1>
        
        
      </div>
      <div className='flex justify-center font-bold text-3x1 pt-10'>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Atualize o Status</span>
    
  </div>
  <select className="select select-bordered">
    <option disabled selected>Escolha um</option>
    <option onClick={StatusAguardando}>Aguardando pagamento</option>
    <option onClick={StatusConfirmado}>Pagamento confirmado</option>
    <option onClick={StatusSeparacao}>Em separação</option>
    <option onClick={StatusFaturado}>Pedido Faturado</option>
    <option onClick={StatusEntrega}>Encaminhado para transporte</option>
    <option onClick={StatusConcluido}>Pedido concluido</option>
  </select>
  <div className="label">
  </div>
</label>
        </div>

      <div className='flex pb-40 justify-center pt-40  font-black text-2xl'>
      <ul className="timeline">
  <li>
    <div className="timeline-start timeline-box">Aguardando pagamento</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5 text-primary">
        <path fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
        clipRule="evenodd" /></svg>
    </div>
    <hr className="bg-primary"/>
  </li>
  <li>
  <hr className="bg-primary"/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5 text-primary">
        <path fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
        clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">Pagamento confirmado</div>
    <hr className="bg-primary"/>
  </li>
  <li>
    <hr className="bg-primary"/>
    <div className="timeline-start timeline-box">Em separação</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5 text-primary">
        <path fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
        clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5"><path fillRul
      e="evenodd" d="M10 18a8 8
       0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="eve
       nodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">Pedido faturado</div>
    <hr/>
  </li>

  <li>
    <hr className=""/>
    <div className="timeline-start timeline-box">Encaminhado para transporte</div>
    <div className="timeline-middle">
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-5 h-5"><path fillRul
    e="evenodd" d="M10 18a8 8
     0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="eve
     nodd" /></svg>
    </div>
    <hr/>
  </li>
  
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5"><path fillRul
      e="evenodd" d="M10 18a8 8
       0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="eve
       nodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">Pedido concluido</div>
    <hr/>
  </li>
  
  
  
</ul>  
      </div>

    </div>
  )
}

export default StatusPedido
