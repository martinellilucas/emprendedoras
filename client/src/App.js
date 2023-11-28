import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import { useState } from "react";
import Detail from "./components/Detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { user, isAuthenticated } = useAuth0();
  const { usuario } = useSelector((state) => state);
  const dispatch = useDispatch();
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
