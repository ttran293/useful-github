import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://github.com/ttran293.png?size=200`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
