
import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/logo1.png";
import styles from './styles.module.css'
import api from "../../services/api";
// import api from "../../services/api";

function Home() {
  const getAllPokemons = async () => {
    const pokemons = await api.get('pokemon')
    return pokemons
  }
  
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