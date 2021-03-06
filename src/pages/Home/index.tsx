import { useEffect, useState } from "react";
import {Link } from 'react-router-dom'

import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/logo1.png";
import styles from './styles.module.css'
import api from "../../services/api";

interface IPokemon {
  name: string
  url: string
}

interface IResponse {
  count: number;
  next: string | null
  previous: string | null
  results: IPokemon[]
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>()
  
  const getAllPokemons = async () => {
    const { data } = await api.get<IResponse>('pokemon')
    
    setPokemons(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className={styles.container}>
      <img 
        src={PokemonLogo} 
        alt="Pokemon Logo"
      />
      {pokemons ? pokemons.map((pokemon) => (
        <Link to={`/${pokemon.name}`} key={pokemon.name}>
          <PokemonItem name={pokemon.name} />
        </Link>
      )): (
        <h1 className={styles.loading}>Carregadando...</h1>
      )}
    </div>
  );
}

export default Home;