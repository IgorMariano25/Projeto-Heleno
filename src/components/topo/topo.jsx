import { Card, Img, Textos } from "./Style.js";
import {Link} from 'react-router-dom';

const Topo = ( props ) => {
    return(
        <Card>
            <Img 
                src={ `imagens/logoIBMECescuro.png` }
                alt={'logo do IBMEC'}
                path = "/"
            />
            <Textos>
                <Link to="/">Home</Link>
                <Link to="/Portfolios">Portfolios</Link>
                <Link to="/Alunos">Alunos</Link>
                <Link to="/Contato">Contato</Link>
            </Textos>
        </Card>
    );
}

export default Topo;