import React from 'react'
import { Link } from 'react-router-dom'

const Pedido = () => {
  return (
    <div className=''>
      <div className='flex pb-60'>
      <h1 className='font-black text-5xl'>Finalize seu pedido.</h1>
      </div>
      <div>

        Sumario
        





      </div>
      <div className='justify-center flex m-2 rounded bg-cyan-950 px-4 py-2 text-white'>
        <button><Link to={'/pedido-finalizado'}>Finalizar pedido</Link></button>
      </div>





    </div>
  )
}

export default Pedido
