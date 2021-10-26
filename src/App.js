import "bootstrap/dist/css/bootstrap.min.css/"
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="container text-center">
      <header className="App-header">
        <Sidebar />
      </header>
    </div>
  );
}

export default App;
