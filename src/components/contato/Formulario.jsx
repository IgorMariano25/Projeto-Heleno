import { Titulo, Informacoes, Subtitulo, Form, Img, boxFormulario } from "./Style.js";

const Formulario = ( props ) => {

    const enviado = (event) => {
        event.preventDefault();
        alert(`Enviado!`);
    }
    return (
        <div>
            <Img
                src={ `imagens/imagemContato.jpg` }
                alt={'imagem de computador contendo código'}
            />
            <Informacoes>
            <Titulo>
                <h1> Quer saber mais?<br/>
                <Subtitulo>
                    <span>Fale conosco!</span>
                </Subtitulo>
                </h1>
            </Titulo>
                <boxFormulario onSubmit={enviado}>
                    <label>
                        <Form type="text"
                        placeholder="Nome" />
                    </label>
                    <label>
                        <Form
                        type="text" 
                        placeholder="E-mail"  
                        />
                    </label>
                    <label>
                        <Form
                        type="textArea" 
                        placeholder="Sua mensagem"  
                        />
                    </label>
                    <input type="submit"
                    value={"Enviar"} />
                    </boxFormulario>
                </Informacoes>
        </div>
    );
}

export default Formulario;