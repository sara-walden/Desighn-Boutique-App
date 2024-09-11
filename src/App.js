import './App.css';
import { Provider } from 'react-redux';
import store from './designBoutique/store'
import Shop from './designBoutique/Shop';
import About from './designBoutique/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartDetails from './designBoutique/CartDetails';
import logo from "./images/logo2.svg"
import Payment from './designBoutique/Payment';
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">


      <header className="App-header">

        <Provider store={store}>
          <BrowserRouter>
            <Link to="/" ><img src={logo} alt="Logo" className="logoImg" /></Link>
            <div className="title">
                <Link to="/cart" className="cart">🛒</Link>
                <Link to="/about" className="about">About</Link>
                <Link to="/" className="home">Home</Link>
              <b className="t">DESIGHN BOUTIQUE SHOP</b>
            </div>
            <Routes>
              <Route exact path="/" element={<Shop />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/cart" element={<CartDetails />} />
              <Route exact path="/payment" element={<Payment />} />
            </Routes>
          </BrowserRouter>
        </Provider>

      </header>
      <br></br>
      <div className="footer">
        <br></br>
        <b>Visit us</b>

        <p></p>

      </div>
    </div>
  );
}

export default App;



