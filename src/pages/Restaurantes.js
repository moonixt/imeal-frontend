import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Restaurantes = () => {

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        const fetchRestaurantes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/restaurantes/')
                setRestaurantes(response.data)
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }

        fetchRestaurantes()
    }, [])

    return (
        <div>
            <div className='pt-10'>
                <button className="m-2 rounded bg-cyan-700 px-10 py-2 text-white " onClick={()=>document.getElementById('my_modal_1').showModal()}>Mais informações  🐱</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Olá internauta!</h3>
                        <p className="py-4">Esta é a página de restaurantes! Você pode visualizar os restaurantes aqui! 🐱</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="">Fechar</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            
            <div className='justify-center w-96'>
                {restaurantes.map((restaurante) => (
                    <div key={restaurante.id} className='pt-10 pb-4 '>
                        <h1 className='text-4xl pb-10 font-bold'>{restaurante.nome_restaurante}</h1>
                        <img className='pb-4' src={restaurante.image} alt={restaurante.nome_restaurante} />
                        <p className='text-amber-500'>Código do restaurante: {restaurante.id}</p>
                        <p> Descrição: <br /> {restaurante.descricao_restaurante}</p>
                        


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurantes
