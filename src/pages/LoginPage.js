import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { FacebookLoginButton,GoogleLoginButton, } from "react-social-login-buttons";
import { loginGoogle,loginFacebook ,logoutFirebase } from '../services/firebaseConfig'
import { getRedirectResult } from 'firebase/auth'
import Logphoto from './CSS/logo.jpg'


const LoginPage = () => {    
  const { loginUser } = useContext(AuthContext);

  return (
    
    <div className="authentication__wrapper">
      <div className="authentication__illustration">
        <img src={Logphoto} width={510} height={510} ></img>
      </div>

    <div className="authentication-steps">
      <div>
        <div>
        
        </div>

      </div>
    


      <div>
      <form onSubmit={loginUser}>
        <input className="username-pass" type="email" name="email" placeholder=" E-mail" />
        <input className="username-pass" name="password" placeholder=" Senha" />
        <input className="username-pass" type="submit" />
      </form>
      
      </div>

      <div className="sign-in-onboard ">

        <h1 className="sign-in-onboard__title">Falta pouco para matar sua fome!</h1>
        <h2 className="sign-in-onboard__subtitle">Como deseja continuar?</h2>
        <span className=".btn .btn__label"  > <FacebookLoginButton onClick={loginFacebook}>Continuar com Facebook</FacebookLoginButton></span>

      
       <div className="google-sign-in">
       <GoogleLoginButton onClick={loginGoogle}>Fazer login com o Google</GoogleLoginButton>

       </div>

       <div className="sign-in-onboard__btnContainer">
        <button className="btn btn--default btn--white btn--size-m sign-in-onboard__emailOrPhone">Celular</button>
        <button className="btn btn--default btn--white btn--size-m sign-in-onboard__emailOrPhone">E-mail</button>

       </div>
       
       
       

      </div>

      </div>



    </div>


  );
};

export default LoginPage;
