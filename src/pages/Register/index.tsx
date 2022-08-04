import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import SocialLinkLogIn from '../../componentes/SocialLinkLogIn'
import { Link } from 'react-router-dom'
import { LabelInput } from '../../componentes/LabelInput'
import LinkButton from '../../componentes/LinkButton'
import Divider from '../../componentes/Divider'
import rightPattern from '../../assets/icons/rightPattern.svg'
import './style.scss'
export default function RegisterPage() {
  return (
    <>
      <Header />
      <section className="registerPage">
        <h2>Olá! Como você prefere se cadastrar?</h2>
        <div className="socialLinkLogInButtons">
          <SocialLinkLogIn
            destiny="#"
            text="Cadastrar com o google"
            icon="google"
          />
          <SocialLinkLogIn
            destiny="#"
            text="Cadastrar com o linkedin"
            icon="linkedin"
          />
          <SocialLinkLogIn
            destiny="#"
            text="Cadastrar com o facebook"
            icon="facebook"
          />
        </div>
        <Divider />
        <div className="registerInputs">
          <LabelInput title="nome" inputType="text" placeholder="Seu nome" />
          <LabelInput title="email" inputType="email" placeholder="Seu email" />
          <LabelInput
            title="senha"
            inputType="password"
            placeholder="Digite sua nova senha"
          />
          <LabelInput
            title="confirmarSenha"
            inputType="password"
            placeholder="Re-digite sua senha"
          />
        </div>
        <LinkButton className="registerButton" text="Cadastrar" to="#" />
        <p className="conditionsAndTerms">
          Ao continuar, você reconhece que leu e concordou com os{' '}
          <span>Termos de Serviço</span> e as <span>Regras de Privacidade</span>{' '}
          da Tech Delas
        </p>
        <img className="rightPattern" src={rightPattern} alt="" />
        <img className="leftPattern" src={rightPattern} alt="" />
      </section>
      <Footer />
    </>
  )
}
