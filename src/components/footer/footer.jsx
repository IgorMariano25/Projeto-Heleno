import { Footer, Logo, DivRede, ListaRede, IconeRedeSocial} from "./Style.js";

const RodaPe = (props) => {
    return(
            <Footer>
                <a href={ window.location.href }>
                    <Logo
                    src={ `imagens/logoIBMECFundoAmarelo.png` }
                    alt={ 'Logo do IBMEC' }
                /></a>

                <DivRede>
                    <ListaRede>
                        <li>
                            <a href="https://www.instagram.com/ibmec/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `Logo Redes Sociais/Instagram Azul.png` }
                            alt={ `Instagram do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://twitter.com/Ibmec_oficial" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `Logo Redes Sociais/Twitter Azul.png` }
                            alt={ `Twitter do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/Ibmec/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `Logo Redes Sociais/Facebook Azul.png` }
                            alt={ `Facebook do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://br.linkedin.com/school/ibmec" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `Logo Redes Sociais/LinkedIn Azul.png` }
                            alt={ `LinkedIn do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5511988593403" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `Logo Redes Sociais/WhatsApp Azul.png` }
                            alt={ `WhatsApp do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.ibmec.br/" target="_blank" rel="noreferrer" ><IconeRedeSocial
                            src={ `Logo Redes Sociais/Globo Azul.png` }
                            alt={ `Site principal do Ibmec` }
                        /></a>
                        </li>
                    </ListaRede>
                </DivRede>
            </Footer>
    );
}

export default RodaPe;