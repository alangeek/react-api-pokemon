import { useParams } from 'react-router'
import styles from './styles.module.css'

interface IParams {
  pokemon: string
}

const Pokemon: React.FC = () => {
  const { pokemon } = useParams<IParams>()
  
  return <h1>Pagina do pokemon</h1>
}

export default Pokemon