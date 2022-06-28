import { Card, Img, Textos } from "./Style.js";
import {Link} from 'react-router-dom';

const Topo = ( props ) => {
    return(
        <nav>
        <Card>
            <a href={ window.location.href }><Img
                    src={ `imagens/logoIBMECFundoAzul.png` }
                    alt={'logo do IBMEC'}
            /></a>
            <Textos>
                <Link to="/Portfolios">Portfólios</Link>
                <Link to="/Alunos">Alunos</Link>
                <Link to="/Contato">Contato</Link>
                <a href="https://gitlab.com/projeto-multidisciplinar/heleno-app" target="_blank">Documentação</a>
            </Textos>
        </Card>
        </nav>
    );
}

export default Topo;