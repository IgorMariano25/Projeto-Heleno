import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import PessoaCard from "../components/Card/PessoaCard";
import arquivo from "../dados.json";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Pessoas = () => {
    const [dados, setDados] = useState(arquivo);
    const [parametros, setParametros] = useSearchParams();
    const entrada = useRef();


    const filtra = (dados) => {
        const parametro = parametros.get("busca");

        if (!parametro) {
            return dados;

        } else {
            const filtrados = dados.filter(
                (e) => e.nome.toLowerCase().includes(parametro.toLocaleLowerCase()) || e.curso.toLowerCase().includes(parametro.toLocaleLowerCase())
            );
            return filtrados;
        }
       
    }


    useEffect(() => {
        const dadosFiltrados = filtra(arquivo);     
        setDados(dadosFiltrados);

    }, [filtra]);

    return (
        <div>
            <Topo/>
            <form onSubmit={(e) => {
                e.preventDefault();
                setParametros({"busca": `${entrada.current.value}`})
                }}>
                <input 
                    type="text"
                    ref={entrada}
                    />
                <button type='submit'>Pesquisar</button>
            </form>
            <div className="ContainerCard">
                {
                        dados.map( (p, ind) => (
                            <PessoaCard
                                    key = { ind }
                                    imagem = {p.imagem}
                                    nome = {p.nome}
                                    curso = {p.curso}
                            />
                        ))
                    }
            </div>
            <RodaPe/>
        </div>
    )
}

export default Pessoas;
