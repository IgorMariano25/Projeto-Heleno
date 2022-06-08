import styled from "styled-components";

const Card = styled.div`
    top: 0px;
    left: 36px;
    width: 1929px;
    height: 94px;
    background-color: #002555;
    display:flex;
    a {
        color: white;
        margin-right: 20px;
        transition: --offset 300ms, text-decoration-color 300ms;
    }
    a:hover{
        text-decoration: underline;
        text-underline-offset: 0.4em;
    }
`;

const Img = styled.img`
    height: 45%;
    margin: 15px;
    margin-left: 7%;
`;

const Textos = styled.div`
    font-family: 'Dosis', sans-serif;
    flex-grow: 1;
    padding: 0.8em;
    border-radius: 0  8px  8px 0;
    text-decoration: none;
    color:white;
    margin: 1%;
`;


export { Card, Img, Textos }
