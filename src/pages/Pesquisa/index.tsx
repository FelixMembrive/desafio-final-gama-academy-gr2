import CardVaga from "../../componentes/CardVaga";

export default function Pesquisa() {
    return (
      <>
        <h1>PESQUISA DE VAGAS</h1>
        <CardVaga  nome_vaga="Nome da vaga" nome_empresa="Empresa" local_empresa="Local" salvo={true}/>
        <br />
        <CardVaga  nome_vaga="Nome da vaga" nome_empresa="Empresa" local_empresa="Local" salvo={false}/>
        <br />
        <CardVaga  nome_vaga="Nome da vaga" nome_empresa="Empresa" local_empresa="Local" salvo={null}/>
      </>
    );
  }