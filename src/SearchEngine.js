import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import "./SearchEngine.css";
export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleGalleryResponse(response) {
    console.log(response.data);

    setPhotos(response.data);
  }
  function search() {    const apiKey = "8b07dt8e17fee9f438eo54a03e745179";

    let apiUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}&per_page=6`;
    axios.get(ApiUrl).then(handleGalleryResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
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