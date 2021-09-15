interface IProps {
  name: string
}

const PokemonItem: React.FC<IProps> = ({ name, children }) =>{
  return (
    <div>
      <h2>{name}</h2>
      {children}
    </div>
  )
}

export default PokemonItem