import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import PessoaCard from "../components/Card/PessoaCard";
import arquivo from "../dados.json";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

const Pessoas = () => {
    const [dados, setDados] = useState(arquivo);
    const [parametros, setParametros] = useSearchParams();
    const entrada = useRef();

    const filtra = useCallback((dados) => {
        const parametro = parametros.get("busca");

        if (!parametro) {
            return dados;

        } else {
            const filtrados = dados.filter(
                (e) => e.nome.toLowerCase().includes(parametro.toLocaleLowerCase()) || e.curso.toLowerCase().includes(parametro.toLocaleLowerCase())
            );
            return filtrados;
        }

    }, [parametros]);

    useEffect(() => {
        const dadosFiltrados = filtra(arquivo);
        setDados(dadosFiltrados);

    }, [filtra]);

    return (
        <div>
            <Topo/>
            <div className="Pesquisa">
            <form onSubmit={(e) => {
                e.preventDefault();
                setParametros({"busca": `${entrada.current.value}`})
                }}>
                <input
                    type="text"
                    ref={entrada}
                    className="Filtro"
                    placeholder="Buscar"
                    />
                <button type='submit' className="BotaoFiltro">Pesquisar</button>
            </form>
            </div>

            <div className="ContainerCardAlunos">
                {
                        dados.map( (p, ind) => (
                            <PessoaCard
                                    key = { ind }
                                    imagem = {p.imagem}
                                    nome = {p.nome}
                                    curso = {p.curso}
                                    ID = {p.ID}
                            />
                        ))
                    }
            </div>
            <RodaPe/>
        </div>
    );
}

export default Pessoas;
