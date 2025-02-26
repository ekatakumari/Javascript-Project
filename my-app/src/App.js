
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toast } from './Component/Toast/Toast';
import { TrafficLight } from './Component/TrafficLight/TrafficLight';
import { AutoComplete } from './Component/AutoComplete/AutoComplete';
import { Tictactoe } from './Component/Tictactoe/Tictactoe';
import { TicTactoenput } from './Component/Tictactoe/TicTactoenput';

function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path="/toast" element={<Toast/>}/>
      <Route path="/trafficlight" element={<TrafficLight/>}/>
      <Route path="/autocomplete" element={<AutoComplete/>}/>
      <Route path="/tictactoe" element={<TicTactoenput/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
