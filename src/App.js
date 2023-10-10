import {Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/homepage/Homepage";
//import Header from './components/header'
import About from './Pages/about/Aboutus';
import Contact from './Pages/contact/Contact';
import Gtt from './components/Gtt';
import Webapi from './Pages/webapi/Webapi';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/webapi' element={ <Webapi /> } />
      </Routes>
      <Gtt/>
    </div>
  );
}

export default App;
