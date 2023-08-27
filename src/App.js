import axios from 'axios';
import { useEffect, useState } from 'react';
import PokeCard from './components/container';
import { Container } from '@mui/material';

function App() {

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(res => res.data.results)
      .then(data => {
        setPokemons(data);
      })
  }, []);

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      bgcolor: '#131313'
    }}>
       {pokemons && <PokeCard pokemons={pokemons}/>}
    </Container>    
  );
}

export default App;
