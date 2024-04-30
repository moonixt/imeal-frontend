import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/FirebaseContext';


const DadosUsuarioProtected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/login'/>,  alert('Você precisa estar logado para finalizar a compra');
    
  }

  return children;

};




export default DadosUsuarioProtected;