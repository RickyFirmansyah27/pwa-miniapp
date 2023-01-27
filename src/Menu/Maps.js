import ReduxPage from "../Redux/ReduxPage";
import SelectorPage from "../Redux/SelectorPage";
import GreetingPage from "../Views/GreetingPage";
import Main from "../Views/Index";
import LoginPage from "../Views/LoginPage";
import RegisterPage from "../Views/RegisterPage";

export const MainRoute = [
  {
    id: 1,
    name: "dashboard",
    path: "/dashboard",
    element: <Main />,
  },
  {
    id: 2,
    name: "Greeting",
    path: "/greeting",
    element: <GreetingPage />,
  },
  {
    id: 3,
    name: "Auth",
    path: "/login",
    element: <LoginPage />,
  },
  {
    id: 4,
    name: "Register",
    path: "/register",
    element: <RegisterPage />,
  },
  {
    id: 5,
    name: "Redux",
    path: "/redux",
    element: <ReduxPage />,
  },
  {
    id: 6,
    name: "Selector",
    path: "/selector",
    element: <SelectorPage />,
  },
 
]
