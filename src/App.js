
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import Ingredients from './components/Ingredients/Ingredients';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipe/:recipeId" element={<Ingredients />}></Route>
      </Routes>
      </div>
  );
}

export default App;
