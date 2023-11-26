import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

  function handleApiResponse(response) {
    setResults(response.data);
  }
  function search() {
    //https://picsum.photos/
    let apiUrl = `https://picsum.photos/id/${keyword}v2/list&limit=7`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  <form onSubmit={handleSubmit}>
    <input
      type="search"
      onChange={handleKeywordChange}
      defaultValue={props.defaultKeyword}
    />{" "}
    <Results results={results} />
  </form>;
}
