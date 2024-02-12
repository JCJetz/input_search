import React from "react";
import "./SearchBar.css";



<div className="container">
  <h2>Search Filter Array of Objects</h2>
 
  <div className="list-wrapper">
    <div className="filter-container">
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        <select name="size" onChange={onFilterChange}>
          <option value="">Filter by Size</option>
          <option value="2000">Greater Than 2000km</option>
          <option value="6000">Greater Than 6000km</option>
          <option value="10000">Greater Than 10000km</option>
          <option value="25000">Greater Than 25000km</option>
        </select>
      </div>
    </div>
 
    {filteredList.map((item, index) => {
      return (
        <div className="card" key={index}>
          <p className="num-text">{item.id}</p>
          <div>
            <p className="title">{item.name}</p>
            <p className="description">
              {item.size} {item.unit}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>;
