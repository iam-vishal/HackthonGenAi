import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import logo from "./Logo/Kofluence-logo.png";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import customTheme from "./theme";
import Planner from "./Pages/planner";
import Success from "./Pages/success";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <div className="App">
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5 position-fixed top-0 w-100">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} width={150}></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
