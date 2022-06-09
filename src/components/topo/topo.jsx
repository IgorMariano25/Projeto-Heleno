import { Card, Img, Textos } from "./Style.js";
import {Link} from 'react-router-dom';

const Topo = ( props ) => {
    return(
        <Card>
            <a href="/"><Img 
                    src={ `imagens/logoIBMECescuro.png` }
                    alt={'logo do IBMEC'}
            /></a>
            <Textos>
                <Link to="/Portfolios">Portfolios</Link>
                <Link to="/Alunos">Alunos</Link>
                <Link to="/Contato">Contato</Link>
            </Textos>
        </Card>
    );
}

export default Topo;