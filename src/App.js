import './App.css';
import Topo from '../src/components/topo/topo';
import RodaPe from './components/footer/footer';
import { ConteudoPage, Titulo, P, SubTitulo} from './components/conteudo/style.js'
import ProjetoCard from './components/CardProjetos/ProjetoCard.jsx';

function App() {
  return (
      <div>
            <Topo/>
            <ConteudoPage>
              <div className="IntroducaoHomePage">
                <div className="VideoIbmecHome">
                <iframe
                    width="625" height="575"
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries.
                  </P>
                  </div>
                </div>

                <div className='SubTituloProjetosHome'>
                    <SubTitulo>Conheça alguns projetos dos alunos</SubTitulo>
                </div>

              <div className="ProjetoAlunosHome">
                <ProjetoCard/>
              </div>
              <RodaPe/>
            </ConteudoPage>
      </div>
  );
}

export default App;
