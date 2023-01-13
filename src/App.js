import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchAllPokemon from './components/FetchAllPokemon';
import OnePokemon from './components/OnePokemon';
import Navigation from './components/Navigation';
import ErrorPage from './components/ErrorPage';
import { useState } from 'react';

function App() {

  const [pokeSearch, setPokeSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <BrowserRouter>
        <div className='App'>
          <Navigation inputValue={inputValue} setInputValue={setInputValue} setPokeSearch={setPokeSearch} />
          <Routes>
            <Route path='/' element={<FetchAllPokemon />} />
            <Route path='/pokemon/:pokemonId' element={<OnePokemon pokeSearch={pokeSearch} />} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
      

    </ThemeProvider>
  );
}

export default App;
