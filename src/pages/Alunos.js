import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import PessoaCard from "../components/Card/PessoaCard";
import arquivo from "../dados.json";

const Pessoas = () => {
    return (
        <div>
            <Topo/>
            <div className="ContainerCard">
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
            <RodaPe/>
        </div>
    )
}

export default Pessoas;
