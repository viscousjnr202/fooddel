// import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Add from "./pages/Add/Add";
import Order from "./pages/Order/Order";
import List from "./pages/List/List";

function App() {
  const url = 'http://localhost:5000'
  return (
    <div className="App">
      <ToastContainer/>
      <Header />
      <hr />
      <div className="content-placement">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
