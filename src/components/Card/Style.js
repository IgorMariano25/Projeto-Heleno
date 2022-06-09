import styled from "styled-components";

const Card = styled.div`
width: 20em;
border-width: 1px;
background-color: aquamarine;
display: block;

`;
const Img = styled.img`
      width: 15em;
      border-radius: 50%;
      margin: 3px;
      
`;

const Textos = styled.div`
     font-family: Arial, Helvetica, sans-serif;
     background-color: crimson;
     flex-grow: 1;
     padding: .5em;
     
`;

const Nome = styled.p`
    text-transform: uppercase;
    font-weight: 400;
`;

const Curso = styled.p`
     font-weight: 200;
`;

export {Card, Img, Textos, Nome, Curso}


