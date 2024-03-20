import React, { useContext } from "react";
import { Link } from "react-router-dom";
import tit from "../pages/CSS/logo.jpg";
import AuthContext from "../context/AuthContext";
import { logoutFirebase } from "../services/firebaseConfig";
import styles from "../App.css";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="header">
      <ul className="">
        <div className="avatar">
          <div className="w-28 rounded-full">
            <img src={tit} />
          </div>
        </div>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
        <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="m-1">Produtos</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="/produtos">Ver produtos</Link></li>
    <li><Link to="/adicionar-produto">Adicionar</Link></li>
    <li><Link to="/atualizar-produto">Atualizar</Link></li>
    <li><Link to="/deletar-produto">Deletar</Link></li>
    
  </ul>
</div>
          
        </li>
        <li>Restaurantes</li>
        <li >
          <Link  to="/carrinho">Carrinho</Link>
        </li>
        <li>
        <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="m-1">Conta</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="/login">Entrar</Link></li>
    <li><p onClick={logoutUser}>Sair</p> </li>
 
    
  </ul>
</div>
        </li>
        <li>
          
        </li>
        
      </ul>
    </div>
    ///?@ oii sandra aaaazzzxzx
  );
};

export default Header;
