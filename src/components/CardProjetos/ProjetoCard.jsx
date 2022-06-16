import { Card, Textos, Img, Título, Tecnologias, Participantes } from "./Style";

const ProjetoCard = ( props ) => {
    return (
        <Card>
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