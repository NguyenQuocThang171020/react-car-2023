import './App.css';
import Home from './component/Home/Home';
import Model from './component/Model/Model';
import Discover from './component/Discover/Discover';
import Contact from './component/Contact/Contact';
import Service from './component/Service/Service';
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
        <Route path="/model" element={<Model/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
