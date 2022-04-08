import "./profile-card.styles.css";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
const CardProfile = ({ profile }) => {
  const {
    login,
    name,
    html_url,
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
        <div className="content-description">
          {company != null && (
            <div className="content-description">
              <WorkOutlinedIcon />
              <span>{company}</span>
            </div>
          )}
        </div>
        <div className="content-description">
          {location != null && (
            <div className="content-description">
              <LocationOnOutlinedIcon />
              <span>{location}</span>
            </div>
          )}
        </div>
        <div className="content-description">
          {blog != "" && (
            <div className="content-description">
              <InsertLinkOutlinedIcon />
              <a href={blog}>{blog}</a>
            </div>
          )}
        </div>
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
