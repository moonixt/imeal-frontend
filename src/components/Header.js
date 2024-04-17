import React, { useContext, useRef, useEffect, useState } from "react";
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
import axios from "axios";
import { PiHouseLineBold } from "react-icons/pi";

const Header = () => {
  const [logradouro, setLogradouro] = useState(""); // Novo estado para o endereço
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [ponto_ref, setPonto_ref] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formfield = new FormData();

    if (logradouro === "") {
      alert("Adicione um endereco");
      return;
    } else {
      formfield.append("logradouro", logradouro);
    }

    if (numero === "") {
      alert("Adicione um numero");
      return;
    } else {
      formfield.append("numero", numero);
    }

    if (complemento === "") {
      alert("Adicione um valor ao produto");
      return;
    } else {
      formfield.append("complemento", complemento);
    }

    if (ponto_ref === "") {
      alert("Adicione uma quantidade ao estoque");
      return;
    } else {
      formfield.append("ponto_ref", ponto_ref);
    }


  try {
    await axios.post('http://127.0.0.1:8000/enderecos/', formfield);
    alert('Endereco Registrado');
  } catch (error) {
    alert('Preencha os campos obrigatórios', error);
  }
  
}

const [ver_endereco,setVer_endereco] = useState([])

useEffect(() => {
  const fetchEnderecos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/enderecos/')
      setVer_endereco(response.data)
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  fetchEnderecos()
}, [])


  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "BR" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["address"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", function () {
      const place = autoCompleteRef.current.getPlace();
      const logradouroObj = place.address_components.find(
        (component) => component.types.includes("route")
      );
  
      if (logradouroObj) {
        setLogradouro(logradouroObj.long_name);
      } else {
        console.log("Logradouro não disponível para este local");
      }
    });
  }, []);

  let { user, logoutUser } = useContext(AuthContext);
  return (
    <header>
      <div className="header sticky top-0 z-10 ">
        <ul className="">
          <div className="avatar cardselectprod">
            <div className="w-28 rounded-3xl ">
              <Link to={"/"}>
                <img src={tit} />
              </Link>
            </div>
          </div>
          <li className="headerselect">
            <Link to="/">Início</Link>
          </li>
          <li className="headerselect">
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="m-1">
                Produtos
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <Link to="/produtos">Ver produtos</Link>
                </li>
                <li>
                  <Link to="/adicionar-produto">
                    <FaGear />
                    Adicionar
                  </Link>
                </li>
                <li>
                  <Link to="/atualizar-produto">
                    <FaGear />
                    Atualizar
                  </Link>
                </li>
                <li>
                  <Link to="/deletar-produto">
                    <FaGear />
                    Deletar
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <div className="dropdown dropdown-bottom headerselect">
            <div tabIndex={0} role="button" className="m-1">
              Restaurantes
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link to="/restaurantes">Ver restaurantes</Link>
              </li>
              <li>
                <Link to="/cadastrar-restaurante">
                  {" "}
                  <FaGear />
                  Adicionar
                </Link>
              </li>
              <li>
                <Link to="/atualizar-restaurante">
                  <FaGear />
                  Atualizar
                </Link>
              </li>
              <li>
                <Link to="/deletar-restaurante">
                  <FaGear />
                  Deletar
                </Link>
              </li>
            </ul>
          </div>
          <li className="headerselect">
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="">
              <PiMapPinLineLight className="text-2xl ml-1	" />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal text-black" role="dialog">
              <div className="modal-box">
                <div className="rounded-5xl pl-30 justify-center flex">
                  <img
                    src={mapicon}
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h1 className="text-2xl font-bold justify-center flex pt-10">
                  Onde você quer receber seu pedido?
                </h1>
                <div className="pb-10 pt-10  ">
                  <div className="pt-10 justify-center">
                    {/* coloque o codigo aqui */}
                    <form className="" onSubmit={handleSubmit}>
                      <label className="border-slate-950 input input-bordered flex items-center gap-2 mb-4">
                      <input
                          ref={inputRef}
                          type="text"
                          className="grow"
                          placeholder="Buscar endereço"
                          name="logradouro"
                          value={logradouro}
                          onChange={(e) => setLogradouro(e.target.value)}
                        />
                        
                      </label>
                      <label className="border-slate-950 input input-bordered flex items-center gap-2 mb-4">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Número"
                          name="numero"
                          value={numero}
                          onChange={(e) => setNumero(e.target.value)}
                        />
                      </label>

                      <label className="border-slate-950 input flex items-center gap-2 mb-4">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Complemento"
                          name="complemento"
                          value={complemento}
                          onChange={(e) => setComplemento(e.target.value)}
                        />
                      </label>

                      <label className="border-slate-950 input input-bordered flex items-center gap-2 mb-4">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Ponto de referência"
                          name="ponto_ref"
                          value={ponto_ref}
                          onChange={(e) => setPonto_ref(e.target.value)}
                        />
                      </label>

                      <input
                        className="bcolor buttonselect px-10 py-2 text-white"
                        type="submit"
                        value="Salvar endereço"
                      />
                    </form>

                      
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl">Favoritos</h1>
                </div>
                <div id="Leitura enderecos" className=" text-black font-bold bg-white pt-1 pb-1 ">
                {ver_endereco.map((endereco) => (
        <div key={ver_endereco.id} className='alinhamento-endereco cardselectprod'>
          <p><Link to={'/produtos'}><PiHouseLineBold className="text-2xl ml-1"  />{endereco.logradouro}, { endereco.numero}, {endereco.complemento}, 
         { endereco.ponto_ref} </Link></p>
          </div>
      ))}
              </div>
                </div>
        
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>

            {/* <Link  to="/map"><PiMapPinLineLight className="text-2xl ml-1	"/></Link> */}
          </li>
          <li className="headerselect">
            <Link to="/carrinho">
              <BsCartCheckFill className="text-2xl ml-1	" />
            </Link>
          </li>

          <li>
            <div className="dropdown dropdown-bottom headerselect">
              <div tabIndex={0} role="button">
                <div className="text-2xl pt-2"> <BsPersonFill /> </div>
             
              <div className="">Bem Vindo,<br></br> Faça seu Login ou Cadastro</div>
              
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <Link to="/login">Entrar</Link>
                </li>
                <li>
                  <p onClick={logoutUser}>Sair</p>{" "}
                </li>
              </ul>
            </div>
          </li>

          <li></li>
        </ul>
      </div>
    </header>
    ///?@ oii sandra aaaazzzxzx
  );
};

export default Header;
