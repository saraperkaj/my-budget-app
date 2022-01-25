import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//NavBar
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <body>
        <Router>
          <NavBar />
          <main>
            <Routes></Routes>
          </main>
        </Router>
      </body>
    </div>
  );
}

export default App;
