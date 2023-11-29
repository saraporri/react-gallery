import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import "./SearchEngine.css";
export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let pexelsApiKey =
      "Vqw9yBXhD6KlaBaN1RnFSrjFVGjQW7M1Sv5tKIY17tPQIzt45rBoGyxA";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();

    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <h1>Find Images</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search images..."
            value={keyword}
            onChange={handleKeywordChange}
          />
        </form>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
