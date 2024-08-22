import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
//import About from './component/About';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';*/
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light');

  const enable = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#d2d9d9';
      document.body.style.color = '';
      showAlert('The light mode is on', 'Success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#393b3b';
      document.body.style.color = '';
      showAlert('The dark mode is on', 'Success');
    }
  };

  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 0);
  };

  return (
    <>
      {//<Router>
}
        <Navbar title="Home" toggle={enable} mode={Mode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showalert={showAlert} heading="Type your text" mode={Mode} />
        { /* <Routes>
            <Route
              path="/"
              element={<TextForm showalert={showAlert} heading="Type your text" mode={Mode} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
          */}
        </div>
     {//</></Router>
     }
    </>
  );
}

export default App;
