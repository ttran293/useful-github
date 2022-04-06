import CardProfile from "../profile-card/profile-card.component";
import "./card-list-profile.styles.css";
import githubProfiles from "../../data/githubProfiles";
import SearchBox from "../search-box/search-box.component";
import { useState, useEffect } from "react";

function CardListProfile() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilterProfiles] = useState(profiles);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    setProfiles(githubProfiles);
  }, []);

  useEffect(() => {
    const newFilteredProfiles = profiles.filter((profile) => {
      
      return (
        profile.login.toLocaleLowerCase().includes(searchField) ||
        profile.name.toLocaleLowerCase().includes(searchField) ||
        profile.bio.toLocaleLowerCase().includes(searchField)
        //profile.company.toLocaleLowerCase().includes(searchField) 
        // profile.location.toLocaleLowerCase().includes(searchField)
      );
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
