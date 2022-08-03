import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import { LabelInput } from '../../componentes/LabelInput'
import LinkButton from '../../componentes/LinkButton'
import SocialLinkLogIn from '../../componentes/SocialLinkLogIn'
import { Link } from 'react-router-dom'
import rightPattern from '../../assets/icons/rightPattern.svg'
import './style.scss'
export default function Login() {
  return (
    <>
      <Header />
      <section id="loginPage">
        <h2>Olá! Boas-vindas</h2>
        <div id="socialLinkLogInButtons">
          <SocialLinkLogIn
            destiny="#"
            text="Continuar com o google"
            icon="google"
          />
          <SocialLinkLogIn
            destiny="#"
            text="Continuar com o linkedin"
            icon="linkedin"
          />
          <SocialLinkLogIn
            destiny="#"
            text="Continuar com o facebook"
            icon="facebook"
          />
        </div>
        <div className="newbieSigIn">
          <p>
            Não tem uma conta?{' '}
            <span>
              <Link className="register" to="#">
                Cadastre-se
              </Link>
            </span>
          </p>
        </div>
        <div className="divider">
          <p>ou</p>
        </div>
        <LabelInput title="E-mail" inputType="email" placeholder="Seu E-mail" />
        <LabelInput
          title="Senha"
          inputType="password"
          placeholder="Sua Senha"
        />
        <LinkButton className="loginButton" text="Entrar" to="#" />
        <Link className="forgotPassword" to="#">
          Esqueceu sua senha? <span>Recupere</span>
        </Link>
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
