import React, { useContext, useRef, useEffect, useState, useCallback } from "react"; // importações de hooks do REACT
import { Link } from "react-router-dom"; //Importação de componente LINK para uso
import tit from "../pages/CSS/OIG1.k.jpeg"; //Importação de imagem na barra de navegação
import AuthContext from "../context/AuthContext"; //Importação de contexto de autenticação, não sendo utilizado no momento
import { logoutFirebase } from "../services/firebaseConfig"; // import de função do firebase
import { PiMapPinLineLight } from "react-icons/pi"; // importação de icone de mapa na barra de navegação
import { BsCart3, BsCartCheckFill, BsPersonFill } from "react-icons/bs"; //importação de icones do carrinho na barra de navegação
import { FaGear } from "react-icons/fa6"; // importação de icone de engrenagem na barra de navegação
import styles from "../App.css"; // importação de css, atualmente desativado
// import "./cab.css"
import mapicon from "../pages/CSS/map.jpg"; //importação de imagem de gato ao abrir o mapa
import axios from "axios"; // Importação de framework axios para requisições JSON
import { PiHouseLineBold } from "react-icons/pi"; // Importação de icone
import { BsPersonCircle } from "react-icons/bs"; //importação de icone de usuario na barra de navegação
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapStyle from "../MapStyle"
import { BsPencil } from "react-icons/bs";




const libraries = ["places"];
const loadScriptOptions ={
  googleMapsApiKey: "AIzaSyA60Y3t48fnyE4J_JlW_JOgBV-uaLMaaJA",
  libraries,

}

const Header = () => {

  let { user, logoutUser } = useContext(AuthContext);

  const [logradouro, setLogradouro] = useState(""); // Estado para o endereço ser salvo, Com o Google maps
  const [numero, setNumero] = useState(""); //Estado para o número ser salvo
  const [complemento, setComplemento] = useState(""); //Estado para o complemento ser salvo
  const [ponto_ref, setPonto_ref] = useState(""); //Estado para o ponto de referência ser salvo



const handleSubmit = async (event) => { // Inicio de Função assincrona de salvar endereço postando na rota
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
      await axios.post("http://127.0.0.1:8000/enderecos/", formfield);
      alert("Endereco Registrado");
    } catch (error) {
      alert("Preencha os campos obrigatórios", error);
    }
  }; // Final de função assincrona

  const [ver_endereco, setVer_endereco] = useState([]); //Variavel de estado para leitura do endereço salvos do banco

  useEffect(() => {  //Função de uso de efeito para buscar (get) dos endereços salvos no banco
    const fetchEnderecos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/enderecos/");
        setVer_endereco(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchEnderecos();
  }, []); //final de função de uso de efeito 

 

 // IMPLEMENTAÇÃO MAPS


const mapContainerStyle = {
  
  height: "40vh",
};
const center = {
  lat: -23.5346793,
  lng: -46.65297495,
};

const configmap = {
  styles: MapStyle,
  
}

 const autoCompleteRef = useRef();
 const inputRef = useRef();
 const options = {
   componentRestrictions: { country: "BR" },
   fields: ["address_components", "geometry", "icon", "name"],
   types: ["address"],
 };

 const { isLoaded, loadError } = useLoadScript(loadScriptOptions);



 useEffect(() => {
   if (isLoaded) {
     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
       inputRef.current,
       options
     );
     autoCompleteRef.current.addListener("place_changed", function () {
       const place = autoCompleteRef.current.getPlace();
       const logradouroObj = place.address_components.find((component) =>
         component.types.includes("route")
       );
       if (logradouroObj) {
         setLogradouro(logradouroObj.long_name);
       } else {
         console.log("Logradouro não disponível para este local");
       }
     });
   }
 }, [isLoaded]);

 const [markers,setMarkers] = useState([]);

 if (loadError) return "Erro ao carregar mapa";
 if (!isLoaded) return "Carregando mapa";

 function refreshPage(){ 
  setTimeout(()=>{
    window.location.reload(false);
}, 500); 
}


  

  return (
    <header>
      <div className="header sticky top-0 z-10 ">
        <ul className="">
          <div className="avatar ">
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
                  Onde você quer receber seu pedido?<PiMapPinLineLight></PiMapPinLineLight>
                  
                </h1>
                <div> 
                <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={configmap}
        onClick={(event) =>{
          setMarkers(current => [...current,{
            lat: event.latLng.lat(),
            lng: event.latLng.lat(),
            time: new Date()

          }])
        }} >
          <Marker position={center}></Marker>
          {/* {markers.map((marker) => (
             <Marker key={marker.time.toISOString()} position={{lat: marker.lat, lng: marker.lng}}
              />
              ))} */}
              
             
        </GoogleMap>
                </div>
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
                  <h1 className="text-3xl flex">Favoritos <Link className="pl-3" to={"/deletar-endereco"} onClick={ refreshPage }><BsPencil /></Link></h1>
                  

                  
                </div>
                <div
                  id="Leitura enderecos"
                  className=" text-black font-bold bg-white pt-1 pb-1 "
                >
                  {ver_endereco.map((endereco) => (
                    <div
                      key={ver_endereco.id}
                      className="alinhamento-endereco cardselectprod"
                    >
                      <p>
                        <Link to={"/produtos"}>
                          <PiHouseLineBold className="text-2xl ml-1" />
                          {endereco.logradouro}, {endereco.numero},{" "}
                          {endereco.complemento},{endereco.ponto_ref}{" "}
                          <p className='text-amber-500 pl-2'>Endereço: {endereco.id}</p>
                          
                        </Link>
                        
                      </p>
                    
                    </div>
                  
                  ))}
                </div>
                <div></div>
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
                <div className="text-2xl pt-2">
                  {" "}
                  <BsPersonCircle />{" "}
                </div>

                <div className="text-sm">
                  Bem Vindo,<br></br> Faça seu Login ou Cadastro
                </div>
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
