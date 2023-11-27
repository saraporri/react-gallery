import React from "react";
import "./SearchEngine.css";
export default function SearchEngine() {
  return (
    <form>
      <h1>Find Images</h1>
      <div>
        <input
          type="search"
          className="search"
          placeholder="Search images..."
        />
        <button>Search</button>
      </div>
    </form>
  );
}
