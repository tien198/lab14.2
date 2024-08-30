import './App.css';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import CartProvider from './store/CartProvider';

// data 
import { DUMMY_MEALS } from './dummyData';

function App() {
  return (
    <CartProvider>
      <Header />
      <AvailableMeals DUMMY_MEALS={DUMMY_MEALS} />
    </CartProvider>
  );
}

export default App;
