import './App.css';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';

// data 
import { DUMMY_MEALS } from './dummyData';

function App() {
  return (
    <>
      <Header />
      <AvailableMeals DUMMY_MEALS={DUMMY_MEALS} />
    </>
  );
}

export default App;
