import './App.scss';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AuthenticationPage from './Pages/Authentication/AuthenticationPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthenticationPage />
      <Footer />
    </div>
  );
}

export default App;
