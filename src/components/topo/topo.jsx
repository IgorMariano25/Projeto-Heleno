import { Card, Img, Textos, DivRede, ListaRede, IconeRedeSocial } from "./Style.js";
import {Link} from 'react-router-dom';

const Topo = ( props ) => {
    return(
        <nav>
        <Card>
            <a href="/"><Img
                    src={ `imagens/logoIBMECFundoAzul.png` }
                    alt={'logo do IBMEC'}
            /></a>
            <Textos>
                <Link to="/Portfolios">Portfolios</Link>
                <Link to="/Alunos">Alunos</Link>
                <Link to="/Contato">Contato</Link>
            </Textos>

            <DivRede>
                    <ListaRede>
                        <li>
                            <a href="https://www.instagram.com/ibmec/"><IconeRedeSocial
                            src={ `Logo Redes Sociais/Instagram Amarelo.png` }
                            alt={ `Instagram do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://twitter.com/Ibmec_oficial"><IconeRedeSocial
                            src={ `Logo Redes Sociais/Twitter Amarelo.png` }
                            alt={ `Twitter do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/Ibmec/"><IconeRedeSocial
                            src={ `Logo Redes Sociais/Facebook Amarelo.png` }
                            alt={ `Facebook do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://br.linkedin.com/school/ibmec"><IconeRedeSocial
                            src={ `Logo Redes Sociais/LinkedIn Amarelo.png` }
                            alt={ `LinkedIn do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5511988593403"><IconeRedeSocial
                            src={ `Logo Redes Sociais/WhatsApp Amarelo.png` }
                            alt={ `WhatsApp do Ibmec` }
                        /></a>
                        </li>

                        <li>
                            <a href="https://www.ibmec.br/"><IconeRedeSocial
                            src={ `Logo Redes Sociais/Globo Amarelo.png` }
                            alt={ `Site principal do Ibmec` }
                        /></a>
                        </li>
                    </ListaRede>
                </DivRede>

        </Card>
        </nav>
    );
}

export default Topo;