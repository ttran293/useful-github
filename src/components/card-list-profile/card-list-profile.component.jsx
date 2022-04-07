import CardProfile from "../profile-card/profile-card.component";
import "./card-list-profile.styles.css";
import githubProfiles from "../../data/githubProfiles";
import SearchBox from "../search-box/search-box.component";
import { useState, useEffect } from "react";

function CardListProfile() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilterProfiles] = useState(profiles);
  const [searchField, setSearchField] = useState("");
  let newFilteredProfiles;
  console.log('render');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  }, []);

 
  useEffect(() => {
      newFilteredProfiles = profiles.filter((profile) => {
      return (profile.name.toLocaleLowerCase().includes(searchField));
    });
    setFilterProfiles(newFilteredProfiles);
  }, [profiles, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="card-list-container">
      <h1 className="app-title">useful GitHub profiles</h1>
      <SearchBox
        className="repos-search-box"
        onChangeHandler={onSearchChange}
      />
      <div className="card-list">
        {filteredProfiles.map((profile) => {
          return <CardProfile key={profile.id} profile={profile} />;
        })}
      </div>
    </div>
  );
}

export default CardListProfile;
