import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
// import Slider from './components/slider/Slider';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Slider from './components/slider/Slider';
function App() {
  return (
    <div className="App">
      <Header/>
     <Router>
        <Routes>
          <Route path="/slider" element={<Slider/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
