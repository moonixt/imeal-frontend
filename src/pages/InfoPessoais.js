import React from 'react'
import { UserAuth } from "../context/FirebaseContext";
import { Link } from 'react-router-dom';



const InfoPessoais = () => {
    const { user } = UserAuth();


  return (
    <div>
        <div>
            <h1 className='justify-center flex '>Editar informações pessoais</h1>
        </div>
        <div className='justify-center flex'>
        <label className="form-control w-full max-w-xs ">
  <div className="label">
    <span className="label-text">Nome completo</span>
  </div>
  <input type="text" placeholder="Type here" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label>
        </div>

        <div className='justify-center flex'>
        <label className="form-control w-full max-w-xs ">
  <div className="label">
  </div>
  <input type="text" placeholder="CPF" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label>
        </div>
        <div className="justify-center flex">
            <Link to="/conta">
              <button className="m-2 bcolor px-4 py-2 text-white">
                Voltar
              </button>
            </Link>
            
              <button className="m-2 bcolor px-4 py-2 text-white">
                Salvar
              </button>
            
          </div>
      
    </div>
  )
}

export default InfoPessoais
