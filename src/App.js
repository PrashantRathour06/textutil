// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }
  return (
    <>
      <Navbar title="textutils1" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter your thoughts" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
