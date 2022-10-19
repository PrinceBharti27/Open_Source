import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from './components/About';
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#383838";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="Del's Hashing" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/" element={<Textforms heading="Enter the String" showAlert={showAlert} mode={mode} />}/> */}
        {/* <Route exact path="/about" element={<About/>}/> */}
        {/* </Routes> */}
        <Textforms
          heading="Enter the String"
          showAlert={showAlert}
          mode={mode}
        />
        {/* <About /> */}
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
