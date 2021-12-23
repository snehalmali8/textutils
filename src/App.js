//import logo from './logo.svg';
import React , { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#07377f';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
        <TextForm title="Enter Your Text Here" showAlert={showAlert} alert={alert} mode={mode} toggleMode={toggleMode} />
          {/* <About showAlert={showAlert} alert={alert} mode={mode} toggleMode={toggleMode} /> */}
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm title="Enter Your Text Here" showAlert={showAlert} alert={alert} mode={mode} toggleMode={toggleMode} />
            </Route>
          </Switch> */}

        </div>
      {/* </Router> */}


    </>
  );
}

export default App;
