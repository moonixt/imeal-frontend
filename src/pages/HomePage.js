import React from 'react'
import food1 from './CSS/food.jpg'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <section className='font-bold' //className='h-50 bg-gradient-to-r from-cyan-950 to-blue-950 text-white'
    >
    <div className='title-home text-black '>
      <h1>Faça uma compra no IMEAL</h1>
      <p className='subtitle-home'>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>

    <div className='search'>
    <div className='flex w-96 rounded bg-white'>
      <input type='search' name='search'id='search' placeholder='Buscar um Produto' 
      className='w-full border -none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none'
     ></input>

      <button className='m-2 rounded bg-cyan-950 px-4 py-2 text-white'>Buscar</button>




      </div>

      
    </div>
    </div>

    <div>
 
    </div>

    <div class="flex gap-8">
  <div class="card w-96 bg-base-100 shadow-xl pt-10 gap-4">
    <figure><img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title font-bold">Restaurantes</h2>
      <p>Visite restaurantes deliciosos próximos a você!</p>
      <div class="card-actions justify-end">
        <button class="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Acesse agora</button>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-base-100 shadow-xl pt-10 gap-4">
    <figure><img src="https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title font-bold">Produtos</h2>
      <p>Que tal dar uma olhada nos produtos de sua escolha?</p>
      <div class="card-actions justify-end">
        <button class="m-2 rounded bg-cyan-950 px-4 py-2 text-white"><Link to='/produtos'>Acesse agora</Link></button>
      </div>
    </div>
  </div>
</div>



    </section>
    
  )
}

export default HomePage
