import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import { LabelInput } from '../../componentes/LabelInput';
import SocialLinkLogIn from '../../componentes/SocialLinkLogIn';
import { Link, useNavigate } from 'react-router-dom';
import cornerPattern from '../../assets/icons/cornerPattern.svg';
import centerPattern from '../../assets/icons/rightPattern.svg';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { loginUsuario } from '../../services/api/login';
import { useDispatch } from "react-redux";
import { setUser } from '../../Store/modules/user';
import './style.scss';
import Loading from '../../componentes/Loading';
import BackgroundWaves from '../../componentes/BackgroundWaves';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadLogin, setLoadLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoadLogin(true)
    const payload = {
      email,
      password
    };

    try {
      const res = await loginUsuario(payload);

      dispatch(
        setUser({
          token: res.data.token,
          id: res.data.user._id,
          name: res.data.user.name,
          pic: res.data.user.profilePicture,
        }));
      window.scrollTo(0, 0)
      navigate("/areacandidata");
      window.scrollTo(0, 0)

    } catch (error: any) {
      if (error.response) {
        setLoadLogin(false)
        alert(error.response.data.message);
      } else {
        alert("Ops! Algo deu errado...")
      }
    }

  };

  return (
    <>
      <Header />
      <section id="loginPage">
        <h2>Olá! Boas-vindas</h2>
        <div className="socialLinkLogInButtons">
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
        <div className="newbieSignIn">
          <p>
            Não tem uma conta?{' '}
            <span>
              <Link className="registerLink" to="#">
                Cadastre-se
              </Link>
            </span>
          </p>
        </div>
        <div className="divider">
          <p>ou</p>
        </div>
        <LabelInput title="E-mail" inputType="email" placeholder="Seu E-mail" value={email}
          onChange={(e: any) => setEmail(e.target.value)} />
        <LabelInput
          title="Senha"
          inputType="password"
          placeholder="Sua Senha"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        {loadLogin == false &&
          <Button className="loginButton" onClick={handleSubmit}>Entrar</Button>}
        {loadLogin == true &&
          <Loading/>}
        <Link className="forgotPassword" to="#">
          Esqueceu sua senha? <span>Recupere</span>
        </Link>
        <p className="conditionsAndTerms">
          Ao continuar, você reconhece que leu e concordou com os{' '}
          <span>Termos de Serviço</span> e as <span>Regras de Privacidade</span>{' '}
          da Tech Delas
        </p>
        <BackgroundWaves className="rightPattern" pattern={cornerPattern}/>
        <BackgroundWaves className="leftPattern" pattern={cornerPattern} />
      </section>
      <Footer />
    </>
  );
}
