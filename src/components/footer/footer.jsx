import { Footer, Logo } from "./Style.js";

const RodaPe = (props) => {
    return(
        <Footer>
            <Logo
                src={ `imagens/logoIBMECclaro.png` }
                alt={ 'Logo do IBMEC' }
            />
        </Footer>
    );
}

export default RodaPe;