import Topo from "../components/topo/topo";
import RodaPe from "../components/footer/footer";
import Formulario from "../components/contato/Formulario";
import {Link} from 'react-router-dom';


const Pessoas = () => {
    return (
        <div>
            <Topo/>
            <Formulario/>
            <RodaPe/>
        </div>
    );
}

export default Pessoas;