import "./App.css";
import "antd/dist/antd.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Room from "./components/Room/Room";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="room" element={<Room />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
