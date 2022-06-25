import { CardDetalhado, Textos, Nome, Img, Curso, Bio, Ingresso, PrevFormatura} from "./Style";

const PessoaCardDetalhado = (props) => {
    return (
        <CardDetalhado>
            <Img
            src= { `imagens/${props.imagem}` }
            alt= {props.nome}
            />
            <Textos>
                <Nome> {props.nome}</Nome>
                <Curso> {props.curso}</Curso>
                <Ingresso> {Ingresso} </Ingresso>
                <PrevFormatura> {props.formacao}</PrevFormatura>
                <Bio> {props.bio}</Bio>
                <Projetos> {props.projetos} </Projetos>
            </Textos>
        </CardDetalhado>
    )
}

export default PessoaCardDetalhado;