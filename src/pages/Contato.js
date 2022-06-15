import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import Formulario from "../components/contato/Formulario";
import {Link} from 'react-router-dom';
import { Img, Conteudo } from "../components/contato/Style.js";


const Pessoas = () => {
    return (
        <div>
            <Topo/>
            <Conteudo>
                <Img
                    src={ `imagens/imagemContato.jpg` }
                    alt={'imagem de computador contendo código'}
                />
                <Formulario/>
            </Conteudo>
            <RodaPe/>
        </div>
    );
}

export default Pessoas;