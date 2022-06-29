import { Card, Textos, Nome , Img, Curso} from "./Style";
import { useNavigate } from "react-router-dom";

const PessoaCard = ( props ) => {
    const navigate = useNavigate();
    return (  
            <Card onClick={()=>navigate(`${props.ID}`)}>
                <Img
                src= { `imagens/${props.imagem}` }
                alt={props.nome}
                />
            <Textos>
                <Nome> {props.nome} </Nome>
                <Curso>{ props.curso} </Curso>
            </Textos>
        </Card> 
    )
}

export default PessoaCard;