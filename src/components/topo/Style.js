import styled from "styled-components";

const Card = styled.div`
    top: 0px;
    left: 36px;
    width: 1929px;
    height: 94px;
    background-color: #002555;
    display:flex;
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

const Link = styled.a`
    
`;

export { Card, Img, Textos, Link }
