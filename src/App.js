import './App.css';
import Topo from '../src/components/topo/topo';
import RodaPe from './components/footer/footer';
import { ConteudoPage, Titulo, P, SubTitulo} from './components/conteudo/style.js'

function App() {
  return (
      <div>
            <Topo/>
            <ConteudoPage>
                <Titulo>Portifólio de projetos dos alunos dos cursos de Tecnologia do IBMEC-RJ</Titulo>
                <P>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries.
                </P>
                <SubTitulo>Conheça alguns projetos dos alunos</SubTitulo>
              <RodaPe/>
            </ConteudoPage>
      </div>
  );
}

export default App;
