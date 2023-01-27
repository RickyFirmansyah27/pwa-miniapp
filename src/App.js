import {
  BrowserRouter, Route, Routes
} from "react-router-dom"
import Sidebar from "./Menu/Sidebar";
import { MainRoute } from "./Menu/Maps";
//React Component
// import Content from "./ClassComponent/content";
// import Profile from "./ClassComponent/profile";
// import Greeting from "./ClassComponent/greeting";
// Hooks React
// import HooksProfile from "./FunctionalComponent/HookProfile";
// import HooksContent from "./FunctionalComponent/HooksContent";

// import Modal from "./Menu/Modal";
// import LoginPage from "./Views/LoginPage";
// import RegisterPage from "./Views/RegisterPage";
// import Main from "./Views/Index";
// import GreetingPage from "./Views/GreetingPage";



function App() {


  return (

    <BrowserRouter>
      <div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Routes>
            {/* <Route path="/dashboard" element={<Main />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/greeting" element={<GreetingPage />} />
            <Route path="/c" element={<Content />} />
            <Route path="/p" element={<Profile />} /> 
            <Route path="/g" element={<Greeting />} />
            <Route path="/hp" element={<HooksProfile />} />
            <Route path="/hc" element={<HooksContent />} />  */}


            {MainRoute &&
            MainRoute.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={item.element}
              />
            ))}
          </Routes>
        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;