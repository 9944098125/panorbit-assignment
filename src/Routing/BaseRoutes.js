import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Profile from "../Pages/Profile";
import Posts from "../Pages/Posts";
import Gallery from "../Pages/Gallery";
import Todo from "../Pages/Todo";
import ChatBox from "../Components/ChatBox";

const Layout = () => {
  return (
    <>
      <div className="row">
        <Sidebar />
        <div className="col">
          <Navbar />
          <div className="outlet">
            <Outlet />
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
