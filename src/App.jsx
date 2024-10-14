import Joke from "./components/Joke";
import "./App.css";

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="joke-box text-center p-4">
        <h1 className="mb-4">Generador de chistes usando React y Joke API</h1>
        <Joke />
      </div>
    </div>
  );
}

export default App;
