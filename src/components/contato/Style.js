import styled from "styled-components";

const Img = styled.img`
    height: 30em;
    margin-right: 0%;
    margin: 15px;
    margin-left: 10em;
    margin-bottom: 0.8em;
`;

const Titulo = styled.h1`
    font-family: 'Barlow';
    font-size: 13px;
    font-weight: 800;
`;

const Subtitulo = styled.span`
    font-family: 'Barlow';
    font-weight: 100;
    font-size: 20px;
    font-style: italic;
`;

const Informacoes = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    border-radius: 0;
`;

const boxFormulario = styled.form`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    border-radius: 0;
`;

const Form = styled.input`
    font-family: 'Barlow';
    font-size: 14px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: uppercase;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: solid 3px #000000;
`;

export { Titulo, Informacoes, Subtitulo, Form, Img, boxFormulario }