import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import ProjetoCardDetalhado from "../components/CardProjetos/ProjetoCard";
import arquivo from "../projetos.json";
import { useState } from "react";

const ProjetoDetalhado = () => {
    const [dadosProjeto, setDadosProjeto] = useState(arquivo)
    const []

    <div>
        </Topo>
        <div className="ContainerCardProjetos">
            {
                    dados.map( (p, ind) => (
                        <ProjetoCardDetalhado
                                key = { ind }
                                fotoProjeto = {p.fotoProjeto}
                                titulo = {p.titulo}
                                tecnologias = {p.tecnologias}
                                participantes = {p.participantes}
                        />
                    ))
                }
         </div>
        <RodaPe/>
    </div>
}

export default ProjetoDetalhado;