import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register' 
import Login from './pages/Login'
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
     path: "/",
     element : <div>
      <Navbar/>
      <Home/>
      <Footer/>
     </div>
  },
  {
    path : "/register",
    element : <Register/>
  },
  {
    path : "/login",
    element : <Login/>
  }


])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
