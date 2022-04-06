import "./profile-card.styles.css";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
const CardProfile = ({ profile }) => {
  const {
    login,
    html_url,
    name,
    avatar_url,
    bio,
    company,
    location,
    blog,
    public_repos,
    followers,
    following,
  } = profile;

  return (
    <div className="card-container">
      <div>
        <a href={html_url} className="card-header">
          <img className="avatar" alt={`repo ${name}`} src={avatar_url} />
          <p className="profile-name">{name}</p>
          <p className="profile-login">{login}</p>
        </a>
        <p className="bio">{bio}</p>
      </div>
      <div className="content">
        <p className="content-description">
          <WorkOutlinedIcon />
          {"  "}
          {company}
          <LocationOnOutlinedIcon />
          {"  "}
          {location}
        </p>
        <p className="content-description">
          <InsertLinkOutlinedIcon />
          {"  "}
          <a href={blog}>{blog}</a>
        </p>
      </div>
      <hr></hr>
      <div className="card-footer">
        <p className="content-description">
          {"Repos: "}
          {public_repos}
        </p>{" "}
        <p className="content-description">
          {" Followers: "}
          {followers}
        </p>
        <p className="content-description">
          {" Followings: "}
          {following}
        </p>
      </div>
    </div>
  );
};

export default CardProfile;
