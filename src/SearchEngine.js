import React, { useState } from "react";
import axios from "axios";
import Images from "./Images";
import "./SearchEngine.css";
export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [images, setImages] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleGalleryResponse(response) {
    setImages(response.data);
  }

  function search() {
    const apiKey = "rVkc9-jh7sIiRdN12GWabdrJ4e__vva1eVy2HMVSp-E";
    let apiUrl = `https://api.unsplash.com/search/collections?page=1&query=office&client_id=${apiKey}`;

    axios.get(apiUrl).then(handleGalleryResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleButtonSearch() {
    setKeyword("");
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="searchEngine">
        <form>
          <h1>Find Images</h1>
          <div>
            <input
              type="search"
              className="search"
              placeholder="Search images..."
              defaultValue={keyword}
              onChange={handleKeywordChange}
            />
            <button onClick={handleButtonSearch}>Search</button>
          </div>
        </form>
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
