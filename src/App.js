import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import {Home, Shop, Account} from './components/pages';

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
