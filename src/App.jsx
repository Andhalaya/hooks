import './App.css';
import useFetchCharacter from './hooks/useFecthCharacters';

function App() {
  const pokemonData = useFetchCharacter('https://pokeapi.co/api/v2/pokemon/1');
  const characterData = useFetchCharacter('https://rickandmortyapi.com/api/character/1');
  
  return (
    <div style={{display:'flex'}}>
      <div className='card'>
      <h2>Personaje Pokemon</h2>
      {pokemonData && (
        <>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} style={{width:300}} />
        </>
      )}
      </div>
      <div className='card'>
      <h2>Personaje Rick and Morty</h2>
      {characterData && (
        <>
          <p>{characterData.name}</p>
          <img src={characterData.image} alt={characterData.name} />
        </>
      )}
      </div>
    </div>
  );
}

export default App;
