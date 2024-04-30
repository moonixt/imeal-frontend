import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import addNotification from 'react-push-notification';
import { useState } from 'react';
//IMPORTS MUI
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import PaidIcon from '@mui/icons-material/Paid';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';






const StatusPedido = () => {




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

const [statusAguardando, setStatusAguardando] = useState(false);
const [statusConfirmado, setStatusConfirmado] = useState(false);
const [statusSeparando, setStatusSeparando] = useState(false);
const [statusFaturado, setStatusFaturado] = useState(false);
const [statusEntrega, setStatusEntrega] = useState(false);
const [statusConcluido, setStatusConcluido] = useState(false);

const StatusAguardando = () => {
  handleEmail_aguardando();
  setStatusAguardando('Aguardando pagamento');
  addNotification({
    title: 'Aguardando pagamento ',
    subtitle: "Oba! Está quase lá",
    message: "Logo finalizaremos",
    theme: "green",
    closeButton: "X",
    duration: 10000, //optional, default: 5000,
    native:true        
  })
  
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
  setStatusConfirmado('Pagamento confirmado');
  addNotification({
    title: 'Pagamento confirmado ',
    subtitle: "Oba! Está quase lá",
    message: "Logo finalizaremos",
    theme: "green",
    closeButton: "X",
    duration: 10000, //optional, default: 5000,
    native:true        
  })
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
  setStatusSeparando('Em separacao');
  addNotification({
    title: 'Pedido em separação',
    subtitle: "Oba! Está quase lá",
    message: "Logo finalizaremos",
    theme: "green",
    closeButton: "X",
    duration: 10000, //optional, default: 5000,
    native:true        
  })
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
  setStatusFaturado('Faturado');
  addNotification({
    title: 'Pedido faturado ',
    subtitle: "Oba! Está quase lá",
    message: "Logo finalizaremos",
    theme: "green",
    closeButton: "X",
    duration: 10000, //optional, default: 5000,
    native:true        
  })
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
  setStatusEntrega('Entrega');
  addNotification({
    title: 'Encaminhado para transporte',
    subtitle: "Oba! Está quase lá",
    message: "Logo finalizaremos",
    theme: "green",
    closeButton: "X",
    duration: 10000, //optional, default: 5000,
    native:true        
  })
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
  setStatusConcluido('Concluido');
  addNotification({
    title: 'Pedido Concluido ',
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

        <div>
        <Timeline position="alternate">
      <TimelineItem>
        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color={statusAguardando === 'Aguardando pagamento' ? 'success' : 'primary'}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Aguardando pagamento
          </Typography>
          <Typography>Seu pedido está aguardando pagamento!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color={statusConfirmado === 'Pagamento confirmado' ? 'success' : 'primary'}>
            <PaidIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Pagamento confirmado
          </Typography>
          <Typography>Seu pagamento foi confirmado! Logo entrará em separação.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color={statusSeparando === 'Em separacao' ? 'success' : 'primary'}>
            <WidgetsIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Em separação
          </Typography>
          <Typography>Seu pedido está sendo separado.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color={statusFaturado === 'Faturado' ? 'success' : 'primary'}>
            <StickyNote2Icon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Pedido faturado
          </Typography>
          <Typography>Seu pedido foi faturado, clique aqui para baixar a NF</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color={statusEntrega === 'Entrega' ? 'success' : 'primary'}>
            <LocalShippingIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Saiu para entrega
          </Typography>
          <Typography>Seu pedido saiu para entrega</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color={statusConcluido === 'Concluido' ? 'success' : 'primary'}>
            <VerifiedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Pedido concluido
          </Typography>
          <Typography>Seu pedido foi concluido.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    
        </div>
</div>

    
  )
}

export default StatusPedido
