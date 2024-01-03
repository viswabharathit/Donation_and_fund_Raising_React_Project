// App.js
import Nav from "./components/naving";
import BrowseFund from "./components/browseFund";
import RegisterPage from "./components/register";
import HowItWorks from "./components/Howitworks";
// import Fund from "./components/startfund";
import Login from "./components/login";
import { Route,Routes} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Browsing from "./components/realbrowse";
import './assets/css/naving.css';
import "./assets/css/browsefund.css";
import "./assets/css/realbrowse.css";
import './assets/css/register.css';
import "./assets/css/dashboard.css";
import "./assets/css/how.css";
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<BrowseFund/>}/>
        <Route path="/browse" element={<Browsing/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/how" element={<HowItWorks/>}/>
        {/* <Route path="/funding" element={<Fund/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}
export default App;
