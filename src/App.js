
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light') //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null); // alert is an object

  const [theme, setTheme] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500); // This will remove the alert after 3 seconds
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#171616';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode"; // Change the title of the page

      // We should not use these things in production, as they ruins the user experience

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"; // Change the title of the page
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"; // Change the title of the page
      // }, 1500);  

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode"; // Change the title of the page
    }
  }

  const changeTheme = (color) => {
    if (theme === color) {
      // If clicked the same theme again, remove it
      setTheme(null);
      showAlert(`Theme removed`, "success");
    } else {
      setTheme(color);
      // showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} theme applied`, "success");
    }
  }


  return (
    <>
     <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} theme={theme} changeTheme={changeTheme} />
      <Alert alert={alert} />
      <div className="container my-3">

      <Routes>
       {/* Why use exact path always, because react does partial matching  */}
        
        {/* for example support  */}
        {/* /users ---> component 1 */}
        {/* /users/home ---> component 2  */}
        
        {/* Partial matching will lead redirection of both to component 1 only */}

          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} theme={theme} heading="Enter the text to analyze below" mode={mode} />}/>
      </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;


