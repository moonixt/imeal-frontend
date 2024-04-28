import React from 'react'
import { UserAuth } from "../context/FirebaseContext";
import { Link } from 'react-router-dom';

const DadosUsuario = () => {
    const { user,} = UserAuth();

  return (
    <div>
     <div className='text-4xl pb-10 justify-center flex'>
     Olá {user.displayName}
     </div>
     <div className='text-4xl pb-10 justify-center flex'>
        Meus Dados
     </div>
     <div className='text-2xl pb-10 border-b-4'>
        <Link to={'/informacao-pessoais'}><h1 className='justify-center flex '>Informações pessoais</h1>
        <h2 className='justify-center flex '>Nome completo e CPF</h2>
        </Link>
     </div>
     <div className='text-2xl pb-10 border-b-4'>
        <Link to={'/dados-contato'}><h1 className='justify-center flex'>Dados de contato</h1>
        <h2 className='justify-center flex'>Email e telefone de contato</h2>
        </Link>
     </div>
     <div className='text-2xl pb-10 border-b-4 '>
        <Link to={'/'}><h1 className='justify-center flex'>Credenciais</h1>
        <h2 className='justify-center flex'>Meios de acesso a minha conta</h2>
        </Link>
     </div>
     <div className='text-2xl pb-10  border-b-4'>
        <Link to={'/'}><h1 className='justify-center flex'>Publicidade</h1>
        <h2 className='justify-center flex'>Gerenciar permissão</h2>
        </Link>
     </div>

    </div>
  )
}

export default DadosUsuario
