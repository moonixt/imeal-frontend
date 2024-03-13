import React from 'react'
import food1 from './CSS/food.jpg'


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
    <div className='flex justify-center pt-10 '>
<button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Frios</button>
<button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Doces</button>
<button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Carnes</button>
<button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Cervejas</button>
<button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Congelados</button>
<button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Massas frescas</button>
</div>

<div className='flex justify-center pb-10 '>
  <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Padaria</button>
  <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Higiene</button>
  <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Feira</button>
  <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Bebidas</button>
  <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Laticínios</button>


  </div>
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
      <h2 class="card-title font-bold">Mercados</h2>
      <p>Que tal dar uma olhada em mercados de sua escolha?</p>
      <div class="card-actions justify-end">
        <button class="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Acesse agora</button>
      </div>
    </div>
  </div>
</div>

<div className='flex gap-8'>
<div className="card w-96 bg-base-100 shadow-xl pt-10">
  <figure className="px-10 pt-10">
    <img src="https://images.pexels.com/photos/724092/pexels-photo-724092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Bebidas</h2>
    <p>Encontre bebidas para sua sexta!</p>
    <div className="card-actions">
      <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Compre agora</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl pt-10">
  <figure className="px-10 pt-10">
    <img src="https://images.pexels.com/photos/5149757/pexels-photo-5149757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold" >Farmácias</h2>
    <p>Aqui você encontra todo tipo de remédio!</p>
    <div className="card-actions">
      <button className="m-2 rounded bg-cyan-950 px-4 py-2 text-white">Compre agora</button>
    </div>
  </div>
</div>


</div>

    </section>
    
  )
}

export default HomePage
