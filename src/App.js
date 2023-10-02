import {Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Header from './components/header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={ <Homepage /> } />
      </Routes>
    </div>
  );
}

export default App;
