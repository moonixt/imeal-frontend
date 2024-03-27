import React, { useContext } from "react";
import { Link } from "react-router-dom";
import tit from "../pages/CSS/OIG1.k.jpeg";
import AuthContext from "../context/AuthContext";
import { logoutFirebase } from "../services/firebaseConfig";
import { BsCart3, BsCartCheckFill, BsPersonFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import styles from "../App.css";
// import "./cab.css"

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <header>
    <div className="header">
      <ul className="">
        <div className="avatar">
          <div className="w-28 rounded-3xl">
            <Link to={'/'}><img src={tit} /></Link>
          </div>
        </div>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
        <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="m-1">Produtos</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
    <li><Link to="/produtos">Ver produtos</Link></li>
    <li><Link to="/adicionar-produto"><FaGear />Adicionar</Link></li>
    <li><Link to="/atualizar-produto"><FaGear />Atualizar</Link></li>
    <li><Link to="/deletar-produto"><FaGear />Deletar</Link></li>
    
  </ul>
</div>
          
        </li>
        <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="m-1">Restaurantes</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
    <li><Link to="/restaurantes">Ver restaurantes</Link></li>
    <li><Link to="/cadastrar-restaurante"> <FaGear />Adicionar</Link></li>
    <li><Link to="/atualizar-restaurante"><FaGear />Atualizar</Link></li>
    <li><Link to="/deletar-restaurante"><FaGear />Deletar</Link></li>
    
  </ul>
</div>
<li>
          <Link  to="/carrinho"><BsCartCheckFill className="text-2xl ml-1	"/></Link>
        </li>
        
        <li>
        <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="text-2xl pt-2 "><BsPersonFill /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
    <li><Link to="/login">Entrar</Link></li>
    <li><p onClick={logoutUser}>Sair</p> </li>
 
    
  </ul>
</div>

        </li>
        
        <li>
          
        </li>
        
      </ul>
    </div>
    </header>
    ///?@ oii sandra aaaazzzxzx
  );
};

export default Header;
