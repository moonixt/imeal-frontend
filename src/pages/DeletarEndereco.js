import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { PiHouseLineBold } from "react-icons/pi"; // Importação de icone


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
    </div>
  )
}

export default DeletarEndereco
