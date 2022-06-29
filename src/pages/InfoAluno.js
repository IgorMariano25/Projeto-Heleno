import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import PessoaCardDetalhado from "../components/Card/PessoaCard";
import arquivo from "../dados.json";

import "../App.css";
import { useState } from "react";

const Perfil = () => {
  const [dados] = useState(arquivo);

  return (
    <div>
      <Topo/>  
        <div className="PerfilAlunoDetalhado">
          {dados.map((p, ind) => (
            <PessoaCardDetalhado
                key= { ind }
                imagem= {p.imagem}
                nome= {p.nome}
                curso= {p.curso}
                matricula= {p.matricula}
                ingresso= {p.ingresso}
                formacao= {p.formacao}
                bio= {p.bio}
                Projetos= {p.Projetos}
            />
          ))
          }       
      </div>
      <RodaPe/>
    </div>
  );
};

export default Perfil;
