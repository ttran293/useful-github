import "./repo-card.styles.css";

const CardRepo = ({ repo }) => {
  const {
    name,
    full_name,
    owner,
    html_url,
    description,
    stargazers_count,
    forks,
  } = repo;
  
  
  return (
    <div className="card-container">
      <div>
        <a href={html_url} className="card-header">
          <img className="avatar" alt={`repo ${name}`} src={owner.avatar_url} />
          <p className="repo-name">{name}</p>
        </a>

        <p className="repo-author">Created by {full_name}</p>
      </div>
      <div className="content">
        <p className="content-description">{description}</p>
      </div>
      <hr></hr>
      <div className="card-footer">
        <span>
          {"⭐"} {stargazers_count}
        </span>{" "}
        <span>
          {"🍴"} {forks}
        </span>
      </div>
    </div>
  );
};

export default CardRepo;
