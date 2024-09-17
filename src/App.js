import './App.css';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import { CartProvider } from './store/cart-context';


function App() {
  return (
    <CartProvider>
      <Header />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
