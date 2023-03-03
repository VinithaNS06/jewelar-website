import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
// import Slider from './components/slider/Slider';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
     {/* <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}/>
        </Routes>
      </Router>  */}
    </div>
  );
}

export default App;
