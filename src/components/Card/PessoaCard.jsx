import { Card, Textos, Nome , Img, Curso} from "./Style";

const PessoaCard = ( props ) => {
    return (
        <Card href="https://www.google.com" target="u_blank">
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