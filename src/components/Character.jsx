import "../style/Character.css";

function Character({ character }) {
  return (
    <div className="character-container">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Character;
