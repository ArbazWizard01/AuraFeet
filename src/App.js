import "./App.css";
import Cart from "./components/cart/Cart";
import Nav from "./components/nav/Nav";
import Slide from "./components/slide/Slide";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Nav />
        <Slide />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
