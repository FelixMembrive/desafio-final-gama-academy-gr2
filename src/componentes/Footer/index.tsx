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
                    <LinkText to="empresas parceiras" text="Empresas parceiras " />
                    <LinkText to="sobre" text="Sobre nós " />
                    <LinkText to="faq" text="FAQ" />
                    <LinkText to="contato" text="Contato " />
                    <LinkText to="ajuda" text="Ajuda" />
                </div>
                <div className="bg-info col">
                    <LinkText to="processos" text="Processos seletivos " />
                    <LinkText to="cursos" text="Cursos" />
                    <LinkText to="mentoria" text="Mentoria " />
                    <LinkText to="blog" text="Blog" />
                    <LinkText to="empresas parceiras" text="Empresas parceiras " />
                    <LinkText to="sobre" text="Sobre nós " />
                    <LinkText to="faq" text="FAQ" />
                    <LinkText to="contato" text="Contato " />
                    <LinkText to="ajuda" text="Ajuda " />
                </div>
            </div>
        </div>
    );
}