
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toast } from './Component/Toast/Toast';

function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path="/toast" element={<Toast/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
