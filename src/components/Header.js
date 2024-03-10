import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { logoutFirebase } from '../services/firebaseConfig'
import styles from '../App.css'

const Header = () => {
  let {user,logoutUser} = useContext(AuthContext)
  return (
    <div className="header">

<ul >      

           
						<li><Link to="/">Inicio</Link></li>
            <li>Restaurantes</li>
            <li>Mercados</li>
            <li>Pets</li>
						<li><Link to="/login">Entrar</Link></li>
            <p onClick={logoutUser}>Desconectar</p>
					
					</ul>
      
    
        
        
      
    
    </div>
  );
};

export default Header;
