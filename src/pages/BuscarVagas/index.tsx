import CardVaga from "../../componentes/CardVaga";
import LinkText from "../../componentes/LinkText";

export default function BuscarVagas() {
    return (
      <>
        <h1>PESQUISA DE VAGAS</h1>
        <LinkText backArrow to="javascript:history.back()" text="Voltar"></LinkText>
        <CardVaga nome_empresa="Empresa" local_empresa="Local" nome_vaga="Nome da Vaga" salvo={true}/>
        <CardVaga nome_empresa="Empresa" local_empresa="Local" nome_vaga="Nome da Vaga" salvo={false}/>
        <CardVaga nome_empresa="Empresa" local_empresa="Local" nome_vaga="Nome da Vaga" salvo={null}/>
      </>
    );
  }