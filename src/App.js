import React, { useState } from "react";

function App() {
  const movieList = [
    { id: "01", name: "El Padrino", year: "1972", rating: "9.2" },
    { id: "02", name: "Adaptation", year: "2002", rating: "7.7" },
    { id: "03", name: "Cómo ser John Malkovich", year: "1999", rating: "7.7" },
    { id: "04", name: "Matrix", year: "1999", rating: "8.7" },
    { id: "05", name: "Happiness", year: "1998", rating: "7.8" },
    { id: "06", name: "Interestelar", year: "2014", rating: "8.6" },
    { id: "07", name: "Cube", year: "1997", rating: "7.3" },
    { id: "08", name: "Inception", year: "2010", rating: "8.8" },
  ];

  const [filteredList, setFilteredList] = useState(movieList)
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = movieList.filter((item)=>{
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    console.log(query)

    setFilteredList(searchList)
  };

  const onFilterChange = (event) => {
    const selectedRating = Number(event.target.value)

    const filterList = movieList.filter((item)=>{
      return Number(item.rating) > selectedRating
    })

    setFilteredList(filterList)
  }

  return (
    <div className="container">
      <h2>Buscador de Películas</h2>
      
      <div className="list-wrapper">
        <div className="filter-container">
          <input
            type="text"
            name="search"
            placeholder="Buscar película"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div>
            <select name="rating" onChange={onFilterChange}>
              <option value="">Filtrar por Rating</option>
              <option value="8.0">Mayor que 8.0</option>
              <option value="8.5">Mayor que 8.5</option>
              <option value="8.8">Mayor que 8.8</option>
              <option value="9.0">Mayor que 9.0</option>
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
                  Año: {item.year} | Rating: {item.rating}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;