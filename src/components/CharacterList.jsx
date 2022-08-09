import React, { useEffect, useState } from "react";
import Character from "./Character";

import "../style/CharacterList.css";

const URL = "https://rickandmortyapi.com/api/character";

function PageNav({ page, setPage }) {
  return (
    <div className="button-container">
      <button onClick={() => setPage(1)}>Restart</button>
      <p>You are on Page: {page} </p>
      <button onClick={() => setPage(page + 1)}>Page {page + 1} </button>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <React.Fragment>
      <PageNav page={page} setPage={setPage} />
      <div className="character-list-container">
        {loading ? (
          <h1>...Loading</h1>
        ) : (
          characters.map((character) => {
            return <Character character={character} key={character.id} />;
          })
        )}
      </div>
      <PageNav page={page} setPage={setPage} />
    </React.Fragment>
  );
}

export default CharacterList;
