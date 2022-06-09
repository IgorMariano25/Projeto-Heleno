import Topo from "../components/topo/topo";
import PessoaCard from "../components/Card/PessoaCard";
import arquivo from "../dados.json";

const Pessoas = () => {
    return (
        <div>
            <Topo>
            </Topo>
            {
                    arquivo.map( (p, ind) => (
                        <PessoaCard 
                                key = { ind }
                                imagem = {p.imagem}
                                nome = {p.nome}
                                curso = {p.curso}
                        />
                        ))
                }
        </div>       
    )
}

export default Pessoas;
