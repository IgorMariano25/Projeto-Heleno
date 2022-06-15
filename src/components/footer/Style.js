import styled from "styled-components";

const Footer = styled.footer`
    bottom: 0%;
    left:0,033%; /* 36px / 1080px  */
    width: 100%;
    height: 75px; /* 94px /1080px */
    background-color: #F5AC00;
    position: fixed;
    display: flex;
`;

const Logo = styled.img`
    height: 2.5em;
    margin-right: 0%;
    margin-top: 0.8em;
    margin: 0,0138%; /* 15px / 1080px*/
    margin-left: 10em;
`;

const DivRede = styled.div`
    margin-left: 36.1%;
`;

const ListaRede = styled.ul`
    display: flex;
    list-style-type: none;
`;

const IconeRedeSocial = styled.img`
    margin-left: 5px;
    padding: 10px;
    height: 25px;
`;

export { Footer, Logo, DivRede, ListaRede, IconeRedeSocial}
