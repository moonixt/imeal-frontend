// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// const ProdutosRestaurante = () => {
//     const { id } = useParams()
//     const [produtos, setProdutos] = useState([])

//     useEffect(() => {
//         const fetchProdutos = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/restaurantes/${id}/produtos`)
//                 setProdutos(response.data)
//                 console.log(response.data)
//             } catch (error) {
//                 console.error("Erro ao buscar produtos:", error);
//             }
//         }

//         fetchProdutos()
//     }, [id])

//     if (!produtos) {
//         return <div>Carregando...</div>
//     }

//     return (
//         <div>
//             <h2>Produtaaaos</h2>
//             {produtos.map((produto) => (
//                 <div key={produto.id}>
//                     <h3>{produto.nome_produto}</h3>
//                     <p>{produto.descricao}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default ProdutosRestaurante
