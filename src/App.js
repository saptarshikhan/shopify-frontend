import './App.css';
import Navbar from './Components/Navbar';
import Category from './Components/Category'; 
import { useState } from 'react';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
function App() {
  const [category,setCategory] = useState(true);
  const [cart,setCart]=useState([]);
  return (
    <>
    <Navbar setCategory={setCategory}/>
      <Category heading={category===true?"Shop for all":("Shop for " + category)} val={category}/>
      <Cart cart={cart}/>
      
      <Footer/>
      
    </>
  );
}

export default App;
