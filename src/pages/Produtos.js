import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { CarrinhoContext } from '../context/CarrinhoContext'
import { Link } from 'react-router-dom'
import { BsCartPlusFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel, Keyboard , EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import im1 from "./CSS/1.jpg"
import im2 from "./CSS/2.jpg"
import im3 from "./CSS/3.jpg"
import im4 from "./CSS/4.jpg"
import im5 from "./CSS/5.jpg"
import im6 from "./CSS/6.jpg"

const Produtos = () => {

  const [produtos, setProdutos] = useState([])

  
  

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/produtos/')
        setProdutos(response.data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProdutos()
  }, [])

  const { carrinho, setCarrinho } = useContext(CarrinhoContext)

  console.log(produtos)

  const adicionarAoCarrinho = (produto) => {

    
    if (carrinho[produto.id]) {
      // Se o produto já está no carrinho, incrementa a quantidade
      setCarrinho({
        ...carrinho,
        [produto.id]: {
          ...carrinho[produto.id],
          quantidade: carrinho[produto.id].quantidade + 1,
        },
      });
    } else {
      // Se o produto não está no carrinho, adiciona com quantidade inicial de 1
      setCarrinho({ ...carrinho, [produto.id]: {  ...produto,  quantidade: 1,},});
      
      
    }

    
    
  };

  

  return (
    <div>
      <div className='alinhamento font-bold text-6xl pt-10 cardselectprod'>
        <h1>Adquira nossos produtos!</h1>
           
      </div>
      <div className='pt-10 pr-20'>
      <Swiper
      slidesPerView={4}
      spaceBetween={50}
    
   navigation={true}
   centeredSlides={true}

   pagination={{
    clickable: true,
  }}
  scrollbar={{ draggable: true }}

   mousewheel={true}
   keyboard={true}
   modules={[Navigation, Pagination, Mousewheel, Keyboard, Scrollbar]}
   className="mySwiper"
  
  
>
  <SwiperSlide><img src={im1} alt="a" style={{ width: '400px', height: '400px', borderRadius:'30px', border:'solid'}} /></SwiperSlide>
  <SwiperSlide><img src={im2} alt="a" style={{width: '400px', height: '400px' , borderRadius:'30px',border:'solid' }} /></SwiperSlide>
  <SwiperSlide><img src={im3} alt="a" style={{width: '400px', height: '400px', borderRadius:'30px',border:'solid' }} /></SwiperSlide>
  <SwiperSlide><img src={im4} alt="a" style={{width: '400px', height: '400px' , borderRadius:'30px',border:'solid' }} /></SwiperSlide>
  <SwiperSlide><img src={im5} alt="a" style={{width: '400px', height: '400px' , borderRadius:'30px',border:'solid' }} /></SwiperSlide>
  <SwiperSlide><img src={im6} alt="a" style={{width: '400px', height: '400px' , borderRadius:'30px',border:'solid' }} /></SwiperSlide>


</Swiper>

      </div>
      
     

      <div className='pt-10 alinhamento'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="m-2 bcolor buttonselect px-10 py-2 text-white " onClick={()=>document.getElementById('my_modal_1').showModal()}>Mais informações  &#128049;</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Olá internauta!</h3>
    <p className="py-4">Esta é a página de produtos! Você pode adquirir os seus produtos aqui! &#128049;</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="">Fechar</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
    <div className=''>
    <div className=' alinhamento bg-base-100 shadow-xl pt-10 gap-4'>
      {produtos.map((produto) => (
        <div key={produto.id} className='alinhamento-produto cardselectprod'>
          
          <img className='pb-2 rounded-2xl ' src={produto.image} alt={produto.nome_produto} style={{paddingLeft:'20px',paddingTop: '20px', width: '190px', height: '150px',}} />
          <h1 className='font-bold'>{produto.nome_produto}</h1>
          <h2 className='text-emerald-600'> Preço: R$ {produto.valor}</h2>
          {/* <h2>Quantidade em estoque: {produto.qtd_estoque}</h2> */}
          <p>Restaurante: {produto.nome_restaurante}</p>
          <p className='font-bold'>Identidade de restaurante: {produto.restaurante}</p>
          <p className='text-amber-500'>Código do produto: {produto.id}</p>
          
          
          <Link to='/carrinho'><button className=' bcolor px-4 py-2 text-white' onClick={() => adicionarAoCarrinho(produto)}>Comprar</button></Link> {/* Botão para adicionar ao carrinho */}
          <button className='m-2 bcolor  px-4 py-4 text-white' onClick={() => adicionarAoCarrinho(produto, alert('Produto adicionado ao carrinho!'))}><BsCartPlusFill /></button> {/* Botão para adicionar ao carrinho */}

        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Produtos
