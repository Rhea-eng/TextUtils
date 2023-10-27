import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
/*import Alert from './components/Alert';*/

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not 
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
{/*<Navbar title = "TextUtils" abouttext="About Us"/>*/}
{/*<Navbar/>*/}
{/*<About/>*/}
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
  <TextForm heading="Enter the text to analyze below" mode={mode}/>
  
</div>
</>

  );
}

export default App;
