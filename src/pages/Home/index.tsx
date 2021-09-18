import { useState } from "react";

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

  console.log({ pokemons })
  
  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="" />
      <PokemonItem name="Pikachuli"/>
      <PokemonItem name="Pikaci"/>
      <PokemonItem name="Pikachurekjrli"/>
      <PokemonItem name="Pikacwwhuli"/>
      <PokemonItem name="Pikachulierrr"/>
      <PokemonItem name="rrrPikierrrrr"/>
    </div>
  );
}

export default Home;