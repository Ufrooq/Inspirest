import "./App.scss";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AuthenticationPage from "./Pages/Authentication/AuthenticationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AuthenticationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
