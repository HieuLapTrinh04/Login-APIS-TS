// import "./App.css";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import ProtectedRouter from "./components/ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRouter><Home /></ProtectedRouter>,
  },
  {
    path: "/login",
    element: <Login />,
  }
  ,
  {
    path: "/about",
    element: <ProtectedRouter><About /></ProtectedRouter>,
  },
  
]);

const App: React.FC = () => {
  return (
    <div className="flex flex-col text-center bg-gradient-to-r from-purple-500 to-pink-500 w-full h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
