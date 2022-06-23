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
            </Textos>
        </Card>
        </nav>
    );
}

export default Topo;