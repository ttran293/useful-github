import { useState, useEffect } from "react";
import githubRepos from "../src/data/githubRepos";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";


const App = () => {
  const [searchField, setSearchField] = useState("");
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilterRepos] = useState(repos);


  useEffect(() => {setRepos(githubRepos); }, []);

  useEffect(() => {
    const newFilteredRepos = repos.filter((repo) => {
      return repo.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterRepos(newFilteredRepos);
  }, [repos, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Useful GitHub Repositories</h1>
      <SearchBox
        className="repos-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search repos"
      />
      <CardList repos={filteredRepos} />
    </div>
  );
};

export default App;
