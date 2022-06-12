import styled from "styled-components";

const Footer = styled.footer`
    bottom: 0%;
    left:0,033%; /* 36px / 1080px  */
    width: 100%;
    height: 75px; /* 94px /1080px */
    background-color: #F5AC00;
    position: absolute;
    display: flex;
`;

const Logo = styled.img`
    height: 3em;
    margin-right: 0%
    margin: 0,0138%; /* 15px / 1080px*/
    margin-left: 10em;
`;

const DivRede = styled.div`
    margin-left: 950px;
`;

const ListaRede = styled.ul`
    display: flex;
    list-style-type: none;
`;

const IconeRedeSocial = styled.img`
    margin-left: 5px;
    padding: 10px;
    width: 35px;
    height: 35px;

`;

export { Footer, Logo, DivRede, ListaRede, IconeRedeSocial}
