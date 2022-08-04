import SelectReact from '../SelectReact';
import LinkButton from '../LinkButton';
import './style.scss';

export default function SecaoAssinarNewsletter() {

    return (
        <section className="assinar-newsletter">
            <h3 className="title-assine">Assine nossa newsletter</h3>
            <div className="conteudo-assinar-newsletter">
                <input placeholder="Digite seu e-mail" type="email" className="item-assinar-newsletter input-assinar-newsletter" />
                <SelectReact />
                <LinkButton to={""} text={'Cadastre-se'} className="item-assinar-newsletter button-assinar-newsletter" />

            </div>
                
        </section>
    );
}