import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import HomePage from "./pages/HomePage";
import Produto  from './pages/Produtos'
import Celular from "./pages/Celular";
import LoginPage from "./pages/LoginPage";
import CadastroProdutos from "./pages/CadastroProdutos";
import DeletarProduto from "./pages/DeletarProduto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AtualizarProduto from "./pages/AtualizarProduto";
import CadastroRestaurantes from "./pages/CadastroRestaurantes";
import Restaurantes from "./pages/Restaurantes";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import Carrinho from "./pages/Carrinho";
import DetalhesProduto from "./pages/DetalhesProduto";
// import RestauranteDetalhes from "./pages/RestauranteDetalhes";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <CarrinhoProvider>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/produtos" element={<Produto/>}></Route>
              <Route path="/login-celular" element={<Celular/>}></Route>
              <Route path="/login-cadastro" element={<Cadastro/>}></Route>
              <Route path="/adicionar-produto" element={<CadastroProdutos/>}></Route>
              <Route path="/deletar-produto" element={<DeletarProduto/>}></Route>
              <Route path="/atualizar-produto" element={<AtualizarProduto/>}></Route>
              <Route path="/cadastrar-restaurante" element={<CadastroRestaurantes/>}></Route>
              <Route path="/restaurantes" element={<Restaurantes/>}></Route>
              <Route path="/carrinho" element={<Carrinho/>}></Route>
              <Route path="/detalhes/:id" element={<DetalhesProduto/>}></Route>




              

              
            {/* <Route path="/restaurante/:id/produtos" element={<RestauranteDetalhes/>}></Route> */}

            </Routes>
            <Footer/>
        </CarrinhoProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
