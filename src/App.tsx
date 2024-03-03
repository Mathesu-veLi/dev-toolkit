import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./containers/Home";
import { Header } from "./components/Header";
import { Cpf } from "./containers/Cpf";

interface IRoute {
  path: string;
  element: JSX.Element;
}

function App() {
  const routes: IRoute[] = [];

  routes.push({
    path: "/",
    element: <Home />,
  });

  routes.push({
    path: "/cpf",
    element: <Cpf />,
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer theme="dark" />
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
