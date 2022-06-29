import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolios from "./pages/Portfolios";
import Alunos from "./pages/Alunos";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import PessoaCard from "./components/Card/PessoaCard";
import ProjetoCard from "./components/CardProjetos/ProjetoCard";
//para rodar o pipeline de novo

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="InfoAluno" element={<PessoaCard />} />
        <Route path="InfoPortifolio" element={<ProjetoCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
//sdadsadasd
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
