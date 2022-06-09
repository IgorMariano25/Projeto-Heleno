import styled from "/Style";

const PessoaCard = ( props ) => {
    return (
        <Card>
            <Img 
            src= { `imagens/${props.imagem}` }
            alt={props.nome}
            />
            <Textos>
                <Nome> {props.nome} </Nome>
                <Cpf>CPF: { props.cpf} </Cpf>
            </Textos>
        </Card>
    )
}

export default PessoaCard;