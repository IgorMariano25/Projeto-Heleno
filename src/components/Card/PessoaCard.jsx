import { Card, Textos, Nome , Img, Curso} from "./Style";


const PessoaCard = ( props ) => {
    return (
        <Card>
            <Img 
            src= { `imagens/${props.imagem}` }
            alt={props.nome}
            />
            <Textos>
                <Nome> {props.nome} </Nome>
                <Curso>CURSO: { props.curso} </Curso>
            </Textos>
        </Card>
    )
}

export default PessoaCard;