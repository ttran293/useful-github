import "./card.styles.css";

const Card = ({ repo }) => {
  const { name, full_name, owner, html_url, description, stargazers_count } = repo;
  
  
  return (
    <div className="card-container">
      <div className="card-header">
        <a href={html_url}>
          <img className="avatar" alt={`repo ${name}`} src={owner.avatar_url} />
        </a>
        <p className="repo-name">{name}</p>
        <p className="repo-author">Created by {full_name}</p>
      </div>
      <div className="content">
        <p className="content-description">{description}</p>
      </div>
      <hr></hr>
      <div className="card-footer">
        <p className="">Stars: {stargazers_count}</p>
      </div>
    </div>
  );
};

export default Card;
