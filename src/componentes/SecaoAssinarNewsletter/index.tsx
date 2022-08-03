import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import ImagemTriangulos from '../../assets/imagens/placeholder_triangulos.svg';
import SelectBox from '../SelectBox';
import './style.scss';
import { Title } from '../FeatureCard/styles';
import SelectReact from '../SelectReact';

export default function SecaoAssinarNewsletter() {

    return (
        <section className="assinar-newsletter">
            <h3 className="title-assine">Assine nossa newsletter</h3>
            <div className="conteudo-assinar-newsletter">
                <input placeholder="Digite seu e-mail" type="email" className="item-assinar-newsletter input-assinar-newsletter" />
                {/* <SelectBox
                    className="item-assinar-newsletter select-assinar-newsletter"
                    placeholder="Sua área profissional"
                    // inputId="sua-area-select"
                    optionValues={[1, 2, 3, 4, 5, 6, 7]}
                    optionTexts={[
                        "Enfermagem",
                        "Fisioterapia",
                        "Fonoaudiologia",
                        "Medicina",
                        "Nutrição",
                        "Odontologia",
                        "Psicologia",
                    ]}
                /> */}
                <SelectReact />
                <LinkButton to={""} text={'Cadastre-se'} className="item-assinar-newsletter button-assinar-newsletter" />

            </div>
                
        </section>
    );
}