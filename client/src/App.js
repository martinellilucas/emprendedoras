import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import { useState } from "react";
import Detail from "./components/Detail/Detail";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
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
        <Route path="/detail/:codigoEmprendedora" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
