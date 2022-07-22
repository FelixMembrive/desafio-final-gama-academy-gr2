import { Facebook, Instagram, Linkedin, Twitter, Whatsapp, Youtube } from "../../assets/icons/svgIcons";
import LinkIcon from "../LinkIcons";
import LinkText from "../LinkText";

export default function Footer() {
    return (
        <div className="container text-center" >
            <div className="row gy-5">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col">
                            <LinkText to="processos" text="Processos seletivos " />
                            <LinkText to="cursos" text="Cursos " />
                        </div>
                        <LinkText to="mentoria" text="Mentoria " />
                        <LinkText to="blog" text="Blog " />

                        <LinkText to="empresas" text="Empresas parceiras " />
                        <LinkText to="sobre" text="Sobre nós " />
                        <LinkText to="faq" text="FAQ" />
                        <LinkText to="contato" text="Contato " />
                        <LinkText to="ajuda" text="Ajuda" />
                    </div>
                </div>
                <div className="col col-xs-6">

                    <LinkIcon to="/facebook">
                        <Facebook />
                    </LinkIcon>

                    <LinkIcon to="/instagram">
                        <Instagram />
                    </LinkIcon>

                    <LinkIcon to="/linkedin">
                        <Linkedin />
                    </LinkIcon>


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