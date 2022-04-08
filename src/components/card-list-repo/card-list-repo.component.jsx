import CardRepo from "../repo-card/repo-card.component";
import "./card-list-repo.styles.css";
import githubRepos from "../../data/githubRepos";
import SearchBox from "../search-box/search-box.component";
import { useState, useEffect } from "react";


const List = [
  { name: "framer/motion" },
  { name: "jwasham/coding-interview-university" },
  { name: "animate-css/animate.css" },
  { name: "mui/material-ui" },
  { name: "khang-nd/7.css" },
  { name: "public-apis/public-apis" },
  { name: "sindresorhus/awesome" },
  { name: "danistefanovic/build-your-own-x" },
  { name: "sdmg15/Best-websites-a-programmer-should-visit" },
  { name: "EbookFoundation/free-programming-books" },
  { name: "practical-tutorials/project-based-learning" },
  { name: "vinta/awesome-python" },
  { name: "tensorflow/tensorflow" },
  { name: "bradtraversy/design-resources-for-developers" },
  { name: "florinpop17/app-ideas" },
  { name: "matheusfelipeog/beautiful-docs" },
  { name: "thedaviddias/Front-End-Checklist" },
];

function CardListRepo() {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilterRepos] = useState(repos);
  const [searchField, setSearchField] = useState("");

   useEffect(() => {
     Promise.all(
       List.map(async (e) => {
         const res = await fetch("https://api.github.com/repos/" + e.name);
         return await res.json();
       })
     ).then((results) => setRepos(results));
   }, []);

  useEffect(() => {
    const newFilteredRepos = repos.filter((repo) => {
      return (
        repo.name.toLocaleLowerCase().includes(searchField) ||
        repo.description.toLocaleLowerCase().includes(searchField)
      );
    });

    setFilterRepos(newFilteredRepos);
  }, [repos, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className="card-list-container">
      <h1 className="app-title">useful GitHub repositories</h1>
      <SearchBox
        className="repos-search-box"
        onChangeHandler={onSearchChange}
      />
      <div className="card-list">
        {filteredRepos.length && filteredRepos.map((repo) => {
          return <CardRepo key={repo.id} repo={repo} />;
        })}
      </div>
    </div>
  );
}

export default CardListRepo;
