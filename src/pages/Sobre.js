import Topo from "../components/topo/topo";
import { Conteudo } from "../components/contato/Style";
import RodaPe from "../components/footer/footer";

const Sobre = () => {
    return (
        <div>
            <Topo/>
            <Conteudo>
                <div>
                    <h2 className="TituloSobre">
                        Criado por Guilherme Félix, Igor Mariano, Felipe Castelhano e Clarissa Proença.
                    </h2>
                    <h2 className="TituloSobre">
                        O Projeto Heleno originou-se como um trabalho eletivo de Desenvolvimento Web, matéria curricular dos alunos em Análise e desenvolvimento de sistemas,
                        e visa facilitar a apresentação dos projetos feitos pelos alunos da instituição Ibmec nos cursos de tecnologia, 
                        tendo como base a apresentação de portifólios dos alunos bem como os resultados alcançados por eles.
                    </h2>
                    <a href="https://gitlab.com/projeto-multidisciplinar/heleno-app" target="_blank" id="Documentacao">Clique aqui e veja a documentação do projeto.</a>    
                </div>
            </Conteudo>
            <RodaPe/>
        </div>
    );
}

export default Sobre;