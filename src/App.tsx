// import "./App.css";
import Login from "./components/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> aaa</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <>Day la trang about</>,
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
