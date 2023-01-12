import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchAllPokemon from './components/FetchAllPokemon';
import OnePokemon from './components/OnePokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<FetchAllPokemon pokemon={pokemon} setPokemon={setPokemon} />} />
            <Route path='/pokemon/:pokemonId' element={<OnePokemon />} />
          </Routes>
        </div>
      </BrowserRouter>
      

    </ThemeProvider>
  );
}

export default App;
