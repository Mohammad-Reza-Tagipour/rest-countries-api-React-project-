import SearchIcon from "@mui/icons-material/Search";
import Country from "./Country";
import { useState, useEffect, useRef } from "react";

function Body({
  darkMode,
  countries,
  countriesInputRef,
  regionRef,
  searchCountries,
}) {
  // console.log(countries);
  // const [countries, setCountries] = useState([]);
  // useEffect(() => {
  //   try {
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  // const fetchData = async () => {
  //   const res = await fetch("https://restcountries.com/v2/all");
  //   const data = await res.json();

  //   setCountries(data);
  // };

  return (
    <main className="app-body">
      <section className="inputs-section">
        <div className={`search-input ${darkMode ? "darkMode" : ""}`}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for a country"
            ref={countriesInputRef}
            onChange={searchCountries}
          />
        </div>
        <div className={`select-region ${darkMode ? "darkMode" : ""}`}>
          <select ref={regionRef}>
            <option>All</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Ocenia</option>
          </select>
        </div>
      </section>
      <div className="countries">
        {countries.map((country) => {
          return (
            <Country
              country
              darkMode={darkMode}
              key={country.altSpellings}
              code={country.altSpellings}
              name={country.name.official}
              capital={country.capital}
              population={country.population}
              region={country.region}
              flag={country.flags.png}
            />
          );
        })}
      </div>
    </main>
  );
}
export default Body;
