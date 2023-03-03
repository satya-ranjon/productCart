import { useState } from "react";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [cart, setCart] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar setCart={setCart} />
        {cart ? <Cart /> : <Product />}
      </div>
    </Provider>
  );
}

export default App;
