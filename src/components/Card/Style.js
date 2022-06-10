import styled from "styled-components";


const Card = styled.div`
    width: 20em;
    border-width: 1px;
    background-color: #002555;
    display: flex;
    border-radius: 5%;
    flex-flow: column;
    padding: .5em;


`;
const Img = styled.img`
      width: 10em;
      border-radius: 50%;
      margin: auto;
      
`;

const Textos = styled.div`
     font-family: Arial, Helvetica, sans-serif;
     background-color: #F5AC00;
     flex-grow: 1;
     padding: 1em;
     text-align: center;
     bottom: 0;
     margin: 0;
     width: auto;
     border-bottom-left-radius: 5%;
     border-bottom-right-radius: 5%;
     
     
`;

const Nome = styled.p`
    text-transform: uppercase;
    font-weight: 400;
`;

const Curso = styled.p`
     font-weight: 200;
`;

export {Card, Img, Textos, Nome, Curso}


