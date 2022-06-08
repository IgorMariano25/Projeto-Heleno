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
                <Link style={{ color: '#FFF' }} to="/">Home</Link>
                <Link style={{ color: '#FFF' }} to="/Portfolios">Portfolios</Link>
                <Link style={{ color: '#FFF' }} to="/">Alunos</Link>
                <Link style={{ color: '#FFF' }} to="/">Contato</Link>
            </Textos>
        </Card>
    );
}

export default Topo;