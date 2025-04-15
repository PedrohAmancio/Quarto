// Importação dos componentes do Bootstrap
import Col from "react-bootstrap/esm/Col";

// Importação dos componentes para criar a pagina
import Cadastro from "../components/Cadastro";
import Tabela from "../components/Tabela";
import Excluir from "../components/Excluir";

import {mostrar} from "../hooks/UseApi";
const Home = () => {
  console.log(mostrar())
  return (
      <div className="d-flex flex-wrap" >
        <Col xs={6} style={{ backgroundColor: "#eee" }}>
          <Cadastro />
          <Excluir />
        </Col>
        <Col xs={6} style={{ backgroundColor: "#eef" }}>
          <Tabela />
        </Col>
      </div>
  );
};

export default Home;
