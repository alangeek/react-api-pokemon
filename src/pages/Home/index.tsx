import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/logo.png";
import styles from './styles.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="" />
      <PokemonItem name="Pikachuli"/>
      <PokemonItem name="Pikaci"/>
      <PokemonItem name="Pikachurekjrli"/>
      <PokemonItem name="Pikacwwhuli"/>
      <PokemonItem name="Pikachulierrrrr"/>
      <PokemonItem name="rrrPikachulierrrrr"/>
      <PokemonItem name="rrrsasalkPikachulierrrrr"/>
    </div>
  );
}

export default Home;