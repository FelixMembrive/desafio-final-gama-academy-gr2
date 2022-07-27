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
        <h2>Entrar na conta</h2>
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
        <p>
          Novo por aqui?{' '}
          <span>
            <Link className="register" to="#">
              Registre-se
            </Link>
          </span>
        </p>
      </section>
      <Footer />
    </>
  )
}
