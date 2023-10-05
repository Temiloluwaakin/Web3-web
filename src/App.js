import {Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/homepage/Homepage";
import Header from './components/header'
import About from './Pages/about/Aboutus';
import Contact from './Pages/contact/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
