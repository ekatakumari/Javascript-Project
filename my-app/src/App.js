
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toast } from './Component/Toast/Toast';
import { TrafficLight } from './Component/TrafficLight/TrafficLight';

function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path="/toast" element={<Toast/>}/>
      <Route path="/trafficlight" element={<TrafficLight/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
