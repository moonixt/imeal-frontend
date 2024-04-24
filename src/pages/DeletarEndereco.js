import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { PiHouseLineBold } from "react-icons/pi"; // Importação de icone
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


const libraries = ["places"];
const loadScriptOptions ={
  googleMapsApiKey: "AIzaSyA60Y3t48fnyE4J_JlW_JOgBV-uaLMaaJA",
  libraries,

}

const DeletarEndereco = () => {

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

    const [id, setId] = useState('')

    const handleDelete = async () => {
      try {
        await axios.delete(`http://127.0.0.1:8000/enderecos/${id}/`)
        alert('Endereço excluído')
      } catch (error) {
        alert('Erro ao excluir o Endereço', error)
      }
    }

  const [idalter, setIdAlter] = useState("")
  const [logradouro, setLogradouro] = useState(""); // Estado para o endereço ser salvo, Com o Google maps
  const [numero, setNumero] = useState(""); //Estado para o número ser salvo
  const [complemento, setComplemento] = useState(""); //Estado para o complemento ser salvo
  const [ponto_ref, setPonto_ref] = useState(""); //Estado para o ponto de referência ser salvo



  const handleUpdate = async (id) => {
    let formfield = new FormData();

    if(id === "") {
      alert("Adicione um ID");
      return;
    } else {
      formfield.append("idAlter",idalter)
    }

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
      await axios.put(`http://127.0.0.1:8000/enderecos/${id}/`, formfield);
      alert('Endereço atualizado');
    } catch (error) {
      alert('Erro ao atualizar o endereço', error);
    }
  }

  const handleUpdateBack = (event) => {
    event.preventDefault();
    handleUpdate(idalter);
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

 

 if (loadError) return "Erro ao carregar mapa";
 if (!isLoaded) return "Carregando mapa";

  return (

    
    <div className=''>
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
                        
                          <PiHouseLineBold className="text-2xl ml-1" />
                          {endereco.logradouro}, {endereco.numero},{" "}
                          {endereco.complemento},{endereco.ponto_ref}{" "}
                          <p className='text-amber-500 pl-2'>Endereço: {endereco.id}</p>
                          
                       
                        
                        
                      </p>
                    
                    </div>
                  
                  ))}
                </div>
                <div><p><input
                  
                  type="text"
                  className="border-slate-950 input"
                  placeholder="Insira o endereço"
                  name="deletar"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                /></p>
                <button className='bcolor buttonselect text-white py-2 font-bold' onClick={handleDelete}>Deletar Endereço</button></div>
                <div>
                <div className="pb-10 pt-10  ">
                  <div className="pt-10 justify-center">
                    {/* coloque o codigo aqui */}
                    <form className="" onSubmit={handleUpdateBack}>

                    <label className="input input-bordered flex items-center gap-2 mb-4">
        <input
          type="text"
          className="grow"
          placeholder="Insira o ID do endereço que deseja alterar"
          name="id"
          value={idalter}
          onChange={(e) => setIdAlter(e.target.value)}
        />
      </label>
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
                        value="Alterar endereço"
                      />
                    </form>
                  </div>
                </div>
                  
                </div>
    </div>
  )
}

export default DeletarEndereco
