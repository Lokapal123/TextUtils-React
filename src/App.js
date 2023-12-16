import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {



const[mode,setMode] = useState('Light')

const[darkmode,setDarkmode] = useState('Enable Dark Mode')
const[alert,setalert] = useState(null)

const showalert = (message,type) =>{
  setalert({
    msg: message,
    typ: type
  })
  setTimeout(() => {
    setalert(null)
  }, 1400);
}

const togglemode = () =>{
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
    setDarkmode('Enable Dark Mode');
    showalert("Light Mode Enabled","success");

  }
  else{
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    setDarkmode('Disable Dark Mode');
    showalert("Dark Mode Enabled","success");

  }
}


return (
<>
<BrowserRouter>
<Navbar title="TextUtils" abouttext="About" mode = {mode} togglemode = {togglemode} darkmode = {darkmode} />
<Alert alert={alert} />
  <div className="container my-4 mx-9">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Try TextUtils - WordCount, CharacterCount, Remove ExtraSpace" showalert={showalert} mode={mode} />}>
          </Route>
    </Routes>
  </div>
</BrowserRouter>
</>
); 
}

export default App;
