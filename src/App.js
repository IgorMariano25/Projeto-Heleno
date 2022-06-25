import './App.css';
import Topo from '../src/components/topo/topo';
import RodaPe from './components/footer/footer';
import { ConteudoPage, Titulo, P, SubTitulo} from './components/conteudo/style.js'
import ProjetoCard from './components/CardProjetos/ProjetoCard';
import projetos from '../src/projetos.json';
import PessoaCard from './components/Card/PessoaCard';
import dados from '../src/dados.json'

function App() {
  return (
     <div>
        <Topo/>
        <ConteudoPage>
          <div className="IntroducaoHomePage">
            <div className="VideoIbmecHome">
              <iframe
                  src="https://www.youtube.com/embed/L5hCvZk5MZE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            <div className="ConteudoTextosHome">
              <Titulo>Portifólio de projetos dos alunos dos cursos de Tecnologia do IBMEC-RJ</Titulo>
              <P>
                Os alunos Igor Mariano, Clarissa Proença, Guilherme Felix e Felipe Castelhano do 1º curso de Full-Stack do Ibmec Centro-RJ, são os desenvolvedores responsáveis por codificar o site que vocês estão visualizando nesse exato momento.
                E isso só foi possível graças ao empenho deses alunos e também pela orientação dos professores de excelência que a nossa instituição provê.
                <br></br>
                <br></br>
                No Ibmec, nós damos voz para os alunos e auxiliamos eles com toda e qualquer dificuldade, além de estimular a criatividade e laboração de projetos e startups nós do Ibmec visamos criar, não somente alunos, mas líderes para o futuro.



              </P>
            </div>
          </div>

            <div className="AlinhamentoAlunosProjetos">
                <div className='SubTituloProjetosHome'>
                    <SubTitulo>Conheça alguns projetos dos alunos</SubTitulo>
                </div>

              <div className="ProjetoAlunosHome">
                <div className="ContainerCardProjetos">
                  {
                          projetos.map( (p, ind) => (
                              <ProjetoCard
                                      key = { ind }
                                      fotoProjeto = {p.fotoProjeto}
                                      titulo = {p.titulo}
                                      tecnologias = {p.tecnologias}
                                      participantes = {p.participantes}
                              />
                          ))
                      }
                </div>
              </div>

              <div className='SubTituloAlunosHome'>
                    <SubTitulo>Conheça os alunos destaque do IBMEC</SubTitulo>
                </div>

                <div className="ContainerCardAlunos">
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
        </div>
        </ConteudoPage>
        <RodaPe/>
    </div>
  );
}

export default App;
