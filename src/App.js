import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchAllPokemon from './components/FetchAllPokemon';
import OnePokemon from './components/OnePokemon';
import Navigation from './components/Navigation';

function App() {
  

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <BrowserRouter>
        <div className='App'>
          <Navigation />
          <Routes>
            <Route path='/' element={<FetchAllPokemon />} />
            <Route path='/pokemon/:pokemonId' element={<OnePokemon />} />
          </Routes>
        </div>
      </BrowserRouter>
      

    </ThemeProvider>
  );
}

export default App;
