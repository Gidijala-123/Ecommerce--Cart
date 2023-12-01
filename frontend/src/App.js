import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Notfound from "./components/Notfound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/cart" exact Component={Cart} />
          <Route path="/" exact Component={Home} />
          <Route path="/not-found" Component={Notfound} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
