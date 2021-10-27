import "bootstrap/dist/css/bootstrap.min.css/"
import  "./css/index.css";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <div className="conainer text-center">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
