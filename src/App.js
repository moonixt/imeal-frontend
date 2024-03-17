import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Cadastro from "./pages/Cadastro";
import HomePage from "./pages/HomePage";
import Restaurantes  from './pages/Restaurantes'
import Celular from "./pages/Celular";
import LoginPage from "./pages/LoginPage";
import CadastroProdutos from "./pages/CadastroProdutos";
import Carrinho from "./pages/Carrinho";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/restaurantes" element={<Restaurantes/>}></Route>
            <Route path="/login-celular" element={<Celular/>}></Route>
            <Route path="/login-cadastro" element={<Cadastro/>}></Route>
            <Route path="/adicionar-produto" element={<CadastroProdutos/>}></Route>
            <Route path="/carrinho" element={<Carrinho/>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;