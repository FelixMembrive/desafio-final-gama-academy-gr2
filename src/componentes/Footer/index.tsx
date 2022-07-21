import { Facebook, Instagram, Linkedin, Twitter, Whatsapp, Youtube } from "../../assets/icons";
import LinkIcon from "../LinkIcons";
import LinkText from "../LinkText";

export default function Footer() {
    return (
        <div className="container" >
            <div className="row">
                <div className="bg-warning col">
                    <LinkText to="processos" text="Processos seletivos " />
                    <LinkText to="cursos" text="Cursos " />
                    <LinkText to="mentoria" text="Mentoria " />
                    <LinkText to="blog" text="Blog " />
                    <LinkText to="empresas" text="Empresas parceiras " />
                    <LinkText to="sobre" text="Sobre nós " />
                    <LinkText to="faq" text="FAQ" />
                    <LinkText to="contato" text="Contato " />
                    <LinkText to="ajuda" text="Ajuda" />
                </div>
                <div className="bg-info col">
                    <LinkIcon to="/facebook">
                        <Facebook />
                    </LinkIcon>
                    <LinkIcon to="/instagram">
                        <Instagram />
                    </LinkIcon>
                    <LinkIcon to="/linkedin">
                        <Linkedin />
                    </LinkIcon>
                    <Twitter />
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