import { Facebook, Instagram, Linkedin, Twitter, Whatsapp, Youtube } from "../../assets/icons/svgIcons";
import LinkIcon from "../LinkIcons";
import LinkText from "../LinkText";
import './style.scss';

export default function Footer() {
    return (
        <div className="footer-flex">
            <div className="links-footer-flex">

                <div className="links-footer-item-flex">
                    <LinkText to="cursos" text="Cursos " />
                    <LinkText to="mentoria" text="Mentoria " />
                </div>

                <div className="links-footer-item-flex">
                    <LinkText to="blog" text="Blog " />
                    <LinkText to="sobre" text="Sobre nós " />
                </div>

                <div className="links-footer-item-flex">
                    <LinkText to="empresas" text="Empresas parceiras " />
                    <LinkText to="processos" text="Processos seletivos " />
                </div>

                <div className="links-footer-item-flex">
                    <LinkText to="faq" text="FAQ" />
                    <LinkText to="ajuda" text="Ajuda" />
                </div>




                {/* <LinkText to="contato" text="Contato " /> */}

            </div>
            <div className="icons-footer-flex">
                <div className="icons-footer-item-group">
                    <LinkIcon to="/facebook">
                        <Facebook />
                    </LinkIcon>

                    <LinkIcon to="/instagram">
                        <Instagram />
                    </LinkIcon>

                    <LinkIcon to="/linkedin">
                        <Linkedin />
                    </LinkIcon>
                </div>

                <div className="icons-footer-item-group">
                    <LinkIcon to="/whatsapp">
                        <Whatsapp />
                    </LinkIcon>

                    <LinkIcon to="/youtube">
                        <Youtube />
                    </LinkIcon>

                    <LinkIcon to="/twitter">
                        <Twitter />
                    </LinkIcon>
                </div>
            </div>
        </div>
    );
}