import './App.css';
import { NavBar } from './components/NavBarHandler/NavBarHandler';
import {Routes,Route} from "react-router-dom"
import { Accessories } from './components/Products/Accessories';
import { Brands } from './components/Products/Brands';
import { Clothing } from './components/Products/Clothing';
import { Fangear } from './components/Products/Fangear';
import { Fitness } from './components/Products/Fitness';
import { LeisureSports } from './components/Products/LeisureSports';
import { Shoes } from './components/Products/Shoes';
import { Sports } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/Accessories" element={<Accessories></Accessories>}></Route>
        <Route path="/Brands" element={<Brands></Brands>}></Route>
        <Route path="/Clothing" element={<Clothing></Clothing>}></Route>
        <Route path="/Fangear" element={<Fangear></Fangear>}></Route>
        <Route path="/Fitness" element={<Fitness></Fitness>}></Route>
        <Route path="/LeisureSports" element={<LeisureSports></LeisureSports>}></Route>
        <Route path="/Shoes" element={<Shoes></Shoes>}></Route>
        <Route path="/Sports" element={<Sports></Sports>}></Route>
      </Routes>
    </div>
  );
}

export default App;
