import React from 'react'

const StatusPedido = () => {
  return (
    <div className='justify-center flex font-bold text-5xl'>
      <div className='justify-center flex font-bold text-5xl'>
        <h1>Status do pedido</h1>
      </div>

      <div>
      <ul className="steps">
  <li data-content="?" className="step step-neutral">Preparando Pedido</li>
  <li data-content="!" className="step step-neutral">Pedido Pronto</li>
  <li data-content="✓" className="step step-neutral">Retirada</li>
  <li data-content="✓" className="step step-neutral">Saiu para entrega</li>
</ul>
        
      </div>






    </div>
  )
}

export default StatusPedido
