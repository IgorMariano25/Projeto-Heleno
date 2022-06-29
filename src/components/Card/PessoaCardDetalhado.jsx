import { CardDetalhado, Textos, Nome, Img, Curso, Bio, Ingresso, PrevFormatura, Projetos} from "./Style";

const PessoaCardDetalhado = ( props ) => {
    return (
        <CardDetalhado>
            <Img
            src= { `${process.env.PUBLIC_URL}/imagens/${props.imagem}` }
            //src = {props.nome}
            alt= {props.nome}
            />
            <Textos>
                <Nome> {props.nome}</Nome>
                <Curso> {props.curso}</Curso>
                <Ingresso> {props.ingresso} </Ingresso>
                <PrevFormatura> {props.formacao}</PrevFormatura>
                <Bio> {props.bio}</Bio>
                <Projetos> {props.projetos} </Projetos>
            </Textos>
        </CardDetalhado>
    )
}

export default PessoaCardDetalhado;