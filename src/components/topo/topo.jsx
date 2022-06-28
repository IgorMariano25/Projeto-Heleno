import { Card, Img, Textos } from "./Style.js";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Topo = ( props ) => {
    const navigate = useNavigate();    
    return(
        <nav>
        <Card>
            <a onClick={()=>navigate("/")}><Img
                    src={ `imagens/logoIBMECFundoAzul.png` }
                    alt={'logo do IBMEC'}
            /></a>
            <Textos>
                <Link to="/Portfolios">Portfólios</Link>
                <Link to="/Alunos">Alunos</Link>
                <Link to="/Contato">Contato</Link>
                <Link to="/Sobre">Sobre</Link>
            </Textos>
        </Card>
        </nav>
    );
}

export default Topo;