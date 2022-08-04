import { useContext, useEffect, useState } from "react";
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import SocialLinkLogIn from '../../componentes/SocialLinkLogIn'
import { LabelInput } from '../../componentes/LabelInput'
import LinkButton from '../../componentes/LinkButton'
import Divider from '../../componentes/Divider'
import rightPattern from '../../assets/icons/rightPattern.svg'
import { AuthContext, AuthProvider } from "../../contexts/AuthContext";
import './style.scss'
import { requestApiMultiPart } from "../../services/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [profilePicture, setProfilePicture] = useState({[]});
  // const [phone, setPhone] = useState("");
  // const [profilePicture, setProfilePicture] = useState("");
  // const { login } = useContext(AuthContext);

  async function register(name: string, email: string, password: string, phone?: string, profilePicture?: string) {
    try {
      const response = await requestApiMultiPart.post("/users", {
        name: name,
        email: email,
        password: password,
        // phone: phone,
        // profilePicture: profilePicture
      });
      //   localStorage.setItem("user", JSON.stringify(response.data));
      //   setUser(response.data);
      //   navigate("/home");
      //   return await response.data;
    } catch (error) {
      "error";
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (password == confirmPassword) {
      // login(name, email, password, phone, profilePicture);
      register(name, email, password)
    }
  }

  return (
    <AuthProvider>
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
          {/* <p className={`absolute -mt-6 mx-2 text-[12px] ${errorResponse ? "text-alert" : ""}`}></p> */}

          <LabelInput
            key="email"
            title="email"
            inputType="email"
            placeholder="Seu email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />

          {/* <LabelInput
            key={"phone"}
            title="phone"
            inputType="text"
            placeholder="Digite seu Telefone"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          /> */}

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

          {/* <LabelInput
            key={"profilePicture"}
            title="profilePicture"
            inputType="file"
            placeholder="Carregar..."
            // value={profilePicture}
            // onChange={(e: any) => setProfilePicture(e.target.files[0])}
          /> */}

        </div>
        {/* <LinkButton className="registerButton" text="Cadastrar" to="#" /> */}
        <button className="registerButton" type="submit">ENTRAR</button>
        <p className="conditionsAndTerms">
          Ao continuar, você reconhece que leu e concordou com os{' '}
          <span>Termos de Serviço</span> e as <span>Regras de Privacidade</span>{' '}
          da Tech Delas
        </p>
        <img className="rightPattern" src={rightPattern} alt="" />
        <img className="leftPattern" src={rightPattern} alt="" />

      </form>

      <Footer />
      </>
    </AuthProvider>
  )
}