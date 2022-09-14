import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Main from "./components/view/main";
import Auth from "./components/view/auth";
import Profile from "./components/view/profile";
import History from "./components/view/history";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/game-history" element={<History/>}></Route>
          <Route path="/balance-history" element={<History game={false}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
