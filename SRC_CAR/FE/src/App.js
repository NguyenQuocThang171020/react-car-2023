import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import ListCar from './component/ListCar/ListCar';
import NewsCar from './component/NewsCar/NewsCar';
import Contact from './component/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* ring */}
      <div className="ring">
                <div className="coccoc-alo-phone coccoc-alo-green">
                    <div className="coccoc-alo-ph-circle"></div>
                    <div className="coccoc-alo-ph-circle-fill"></div>
                    <div className="coccoc-alo-ph-img-circle"></div>
                </div>
            </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/list" element={<ListCar/>}/>
        <Route path="/news" element={<NewsCar/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
