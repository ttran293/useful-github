import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ repos }) => (
  <div className="card-list-container">
    <div className="card-list">
      {repos.map((repo) => {
        return <Card key={repo.id} repo={repo} />;
      })}
    </div>
  </div>
);

export default CardList;
