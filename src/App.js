import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './components/css/fonts.css'
import Main from "./components/view/main";
import Auth from "./components/view/auth";
import Profile from "./components/view/profile";
import History from "./components/view/history";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/CaziMyno" element={<Main/>}></Route>
          <Route path="/CaziMyno/auth" element={<Auth/>}></Route>
          <Route path="/CaziMyno/profile" element={<Profile/>}></Route>
          <Route path="/CaziMyno/game-history" element={<History/>}></Route>
          <Route path="/CaziMyno/balance-history" element={<History game={false}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
