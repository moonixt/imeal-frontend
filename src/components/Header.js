import React, { useContext,useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import tit from "../pages/CSS/OIG1.k.jpeg";
import AuthContext from "../context/AuthContext";
import { logoutFirebase } from "../services/firebaseConfig";
import { PiMapPinLineLight } from "react-icons/pi";
import { BsCart3, BsCartCheckFill, BsPersonFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import styles from "../App.css";
// import "./cab.css"
import mapicon from "../pages/CSS/map.jpg";


const Header = () => {

  const autoCompleteRef = useRef();
 const inputRef = useRef();
 const options = {
  componentRestrictions: { country: "BR" },
  fields: ["address_components", "geometry", "icon", "name"],
  types: ["address"]
 };

 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
   inputRef.current,
   options
  );
  autoCompleteRef.current.addListener("place_changed", async function () {
   const place = await autoCompleteRef.current.getPlace();
   console.log({ place });
  });
 }, []);


  let { user, logoutUser } = useContext(AuthContext);
  return (
    <header>
    <div className="header sticky top-0 z-10">
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

          {/* The button to open modal */}
<label htmlFor="my_modal_7" className=""><PiMapPinLineLight className="text-2xl ml-1	"/></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal text-black" role="dialog">
  <div className="modal-box">
    <div className="rounded-5xl pl-30 justify-center flex">
    <img src={mapicon} style={{ width: "250px", height: "250px" }} />

    </div>
    <h1 className="text-2xl font-bold justify-center flex pt-10">Onde você quer receber seu pedido?</h1>
    <div className='pb-10 pt-10  '>
    <div className='flex w-full h-20 rounded bg-white'>
      <input ref={inputRef} type='search' name='search'id='search' placeholder='Buscar endereço e número' 
      className='border-slate-950 w-full border -none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none'
     ></input>



      </div>

      
    </div>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>


          
          {/* <Link  to="/map"><PiMapPinLineLight className="text-2xl ml-1	"/></Link> */}

          
        </li>
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
