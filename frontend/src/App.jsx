import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FetchConfig } from "./pages/FetchConfig";
import UpdateRemark from "./pages/UpdateRemark";
import { ToastContainer } from "react-toastify";
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchConfig />} />
        <Route path="/updateremark" element={<UpdateRemark />} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
}
