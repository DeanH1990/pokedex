import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import FetchAllPokemon from './components/FetchAllPokemon';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className="App">
        <FetchAllPokemon />
      </div>

    </ThemeProvider>
  );
}

export default App;
