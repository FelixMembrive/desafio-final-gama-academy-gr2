import { useState } from "react";
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import SocialLinkLogIn from '../../componentes/SocialLinkLogIn';
import { LabelInput } from '../../componentes/LabelInput';
import Divider from '../../componentes/Divider';
import rightPattern from '../../assets/icons/rightPattern.svg';
import './style.scss';
import { requestApiMultiPart } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { loginUsuario } from '../../services/api/login';
import { useDispatch } from "react-redux";
import { setUser } from '../../Store/modules/user';
import cornerPattern from '../../assets/icons/cornerPattern.svg';
import centerPattern from '../../assets/icons/rightPattern.svg';
import BackgroundWaves from "../../componentes/BackgroundWaves";


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function register(name: string, email: string, password: string) {
    try {
      const response = await requestApiMultiPart.post("/users", {
        name: name,
        email: email,
        password: password,
      });
      const loginResponse = await loginUsuario({
        email: email,
        password: password,
      });
      
      dispatch(
        setUser({
          token: loginResponse.data.token,
          id: loginResponse.data.user._id,
          name: loginResponse.data.user.name,
          pic: loginResponse.data.user.profilePicture,
        }));
      console.log(loginResponse.data.token);
      navigate("/areacandidata");
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("As senhas digitadas não são iguais, por favor revise sua senha.");
    }
    register(name, email, password);
    // navigate("/buscarvagas");
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="registerPage">
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
          <LabelInput
            key={"name"}
            title="name"
            inputType="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />

          <LabelInput
            key="email"
            title="email"
            inputType="email"
            placeholder="Seu email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />

          <LabelInput
            key={"password"}
            title="password"
            inputType="password"
            placeholder="Digite sua nova senha"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <LabelInput
            key={"confirmPassword"}
            title="confirmPassword"
            inputType="password"
            placeholder="Re-digite sua senha"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="registerButton" type="submit">Cadastrar</button>

        <p className="conditionsAndTerms">
          Ao continuar, você reconhece que leu e concordou com os{' '}
          <span>Termos de Serviço</span> e as <span>Regras de Privacidade</span>{' '}
          da Tech Delas
        </p>

        <BackgroundWaves className="rightPattern" pattern={cornerPattern}/>
        <BackgroundWaves className="leftPattern" pattern={cornerPattern} />

      </form>

      <Footer />
    </>
  );
}