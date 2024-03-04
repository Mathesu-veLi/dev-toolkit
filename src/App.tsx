import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Home } from "./containers/Home";
import { Header } from "./components/Header";
import { Cpf } from "./containers/Cpf";
import { Password } from "./containers/Password";
import { Ip } from "./containers/Ip";

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

  routes.push({
    path: "/password",
    element: <Password />,
  });

  routes.push({
    path: "/ip",
    element: <Ip />,
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Toaster />
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
