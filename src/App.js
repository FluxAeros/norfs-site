import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Account from './components/pages/Account';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
