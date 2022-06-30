import { Card, Textos, Img, Título, Tecnologias, Participantes } from "./Style";
import { useNavigate } from "react-router-dom";

const ProjetoCard = ( props ) => {
    const navigate = useNavigate();
    return (
        <Card onClick={()=>navigate(`${process.env.PUBLIC_URL}/portfolios/${props.ID}`)}>
            <Img 
            src= { `imagens_projetos/${props.fotoProjeto}` }
            alt={props.título}
            />
            <Textos>
                <Título> {props.titulo} </Título>
                <Tecnologias>{ props.tecnologias} </Tecnologias>
                <Participantes>{ props.participantes} </Participantes>
            </Textos>
        </Card>
    )
}

export default ProjetoCard;