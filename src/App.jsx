import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  

  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
