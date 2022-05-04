import "./App.css";
 import { Landing } from "./components/LandingHandler/LandingHandler";
import { Routing } from "./NavRoutes/Routes.js";

function App() {
  return (
    <div className="App">
      <Routing></Routing>
      <Landing></Landing>
    </div>
  );
}

export default App;
