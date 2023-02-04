import './App.css';
import Navbar from './Components/Navbar';
import Category from './Components/Category'; 
import { useState } from 'react';
function App() {
  const [category,setCategory] = useState(true);
  return (
    <>
    <Navbar setCategory={setCategory}/>
      <Category heading={category===true?"Shop for all":("Shop for " + category)} val={category}/>
    </>
  );
}

export default App;
