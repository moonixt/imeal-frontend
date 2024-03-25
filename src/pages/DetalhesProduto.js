import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetalhesProduto = () => {


const {id} = useParams()

const [produtos, setProdutos] = useState([])
  

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/restaurantes-produtos/${id}/`)
        setProdutos(response.data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProdutos()
  }, [])


  return (
    <div>
         {produtos.map((produto) => (
        <div key={produto.id} className='pt-10 pb-4 '>
          <h1 className='text-4xl pb-10 font-bold'>{produto.nome_produto}</h1>
          
          
          

        </div>
      ))}
    </div>
  )
}

export default DetalhesProduto
