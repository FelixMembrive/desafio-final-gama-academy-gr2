import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import { LabelInput } from '../../componentes/LabelInput'
import LinkButton from '../../componentes/LinkButton'
import SocialLinkLogIn from '../../componentes/SocialLinkLogIn'
import { Link } from 'react-router-dom'
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
          Esqueceu a senha
        </Link>
      </section>
      <Footer />
    </>
  )
}
