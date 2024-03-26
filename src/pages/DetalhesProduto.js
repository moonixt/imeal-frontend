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
        <div key={produto.id} className='pt-10 pb-4 w-96 '>
          <h1 className='text-4xl pb-10 font-bold'>{produto.nome_produto}</h1>
          <img className='pb-4' src={`http://127.0.0.1:8000/${produto.image}`} alt={produto.nome_produto} />

          <h2 className='text-2xl text-emerald-600 font-bold'> Preço: R$ {produto.valor}</h2>
          {/* <h2>Quantidade em estoque: {produto.qtd_estoque}</h2> */}
          <p>Restaurante: {produto.nome_restaurante}</p>
          <p> Descrição: <br /> {produto.descricao}</p>
          <p className='font-bold'>Identidade de restaurante: {produto.restaurante}</p>
          <p className='text-amber-500'>Código do produto: {produto.id}</p>
            

          
          
          

        </div>
      ))}
    </div>
  )
}

export default DetalhesProduto
