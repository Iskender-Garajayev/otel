import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Gests from "./components/Gests";
import Home from "./components/navigation/home/Home";
import Registr from './components/pages/registr/Registr'
import Gests from "./components/pages/gests/Gests";
import Rooms from "./components/pages/rooms/Rooms";
import Personal from "./components/pages/perosnal/Personal";
import Nots from "./components/pages/nots/Nots";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="/registr" element={<Registr/>} />
            <Route path="/gests" element={<Gests/>} />
            <Route path="/rooms" element={<Rooms/>} />
            <Route path="/personal" element={<Personal/>} />
            <Route path="/nots" element={<Nots/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
