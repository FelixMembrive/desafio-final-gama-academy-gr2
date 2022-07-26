import CardVaga from "../../componentes/CardVaga";

export default function Pesquisa() {
    return (
      <>
        <h1>PESQUISA DE VAGAS</h1>
        <CardVaga nome_empresa="Empresa" local_empresa="Local" nome_vaga="Nome da Vaga" salvo={true}/>
        <CardVaga nome_empresa="Empresa" local_empresa="Local" nome_vaga="Nome da Vaga" salvo={false}/>
        <CardVaga nome_empresa="Empresa" local_empresa="Local" nome_vaga="Nome da Vaga" salvo={null}/>
      </>
    );
  }