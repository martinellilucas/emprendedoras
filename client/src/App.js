import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import { useState } from "react";
import Detail from "./components/Detail/Detail";
import Auth0ProviderWithHistory from "./auth0provider";
import TablaCiclo from "./components/TablaCiclo/TablaCiclo";
import TablaComentarios from "./components/TablaComentarios/TablaComentarios";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Auth0ProviderWithHistory>
      <div>
        <Nav />
        <Routes>
          <Route path="/form" element={<Form />}></Route>
          <Route
            path="/"
            element={
              <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
            }
          ></Route>
          <Route
            path="/detail/:codigoEmprendedora"
            element={<Detail />}
          ></Route>
          <Route
            path="/ciclos/:codigoEmprendedora"
            element={<TablaCiclo />}
          ></Route>
          <Route
            path="/comentarios/:codigoEmprendedora"
            element={<TablaComentarios />}
          ></Route>
        </Routes>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
