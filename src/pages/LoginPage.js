import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import {
  loginGoogle,
  loginFacebook,
  logoutFirebase,
} from "../services/firebaseConfig";
import { getRedirectResult } from "firebase/auth";
import Logphoto from "./CSS/logo.jpg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className="authentication__wrapper font-bold">
      <div className="authentication__illustration">
     
      </div>

      <div className="justify-center">
        <div>
          <div></div>
        </div>

        <div>
        <h1 className="sign-in-onboard__title">
            Fazer login
          </h1>
          <h2 className="sign-in-onboard__subtitle">Como deseja continuar?</h2>
          <form onSubmit={loginUser} className="space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                name="email"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="●●●●●"
                name="password"
              />
              
            </label>
            <input
              className="m-2 rounded bg-cyan-950 px-10 py-2  text-white"
              type="submit"
              value="Entrar"
            />
            
            
          </form>
          <button className="m-2 rounded bg-cyan-950 px-10 py-2 text-white">
              <Link to="/login-cadastro">Criar uma conta</Link>
            </button>
          
          
        </div>

        <div className="sign-in-onboard ">
          
          <span className=".btn .btn__label">
            {" "}
            <FacebookLoginButton onClick={loginFacebook}>
              Continuar com Facebook
            </FacebookLoginButton>
          </span>

          <div className="google-sign-in">
            <GoogleLoginButton onClick={loginGoogle}>
              Fazer login com o Google
            </GoogleLoginButton>
          </div>

          <div className="sign-in-onboard__btnContainer ">
            <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">
              <Link to="/login-celular">Celular</Link>
            </button>
            <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">
              E-mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
