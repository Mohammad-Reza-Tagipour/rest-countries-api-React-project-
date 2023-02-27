import Header from "./Header";
import Body from "./Body";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { dark } from "@mui/material/styles/createPalette";
import SearchIcon from "@mui/icons-material/Search";
import Country from "./Country";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchCountrie, setsearchCountries] = useState();
  const [countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const navigate = useNavigate();

  const noCountriesFound = countries.status || countries.message;

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    // const curr = data[0].currencies[0].name;
    // console.log(curr);
    if (data.status === 404) {
      setCountries([]);
      return;
    }

    setCountries(data);
  };

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const res =
          await fetch(`https://restcountries.com/v3.1/name/${searchValue}
`);
        const data = await res.json();
        setCountries(data);
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };

  const selectRegion = () => {
    const selectValue = regionRef.current.value;

    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const res = await fetch(
          `https://restcountries.com/v3.1/subregion/${selectValue}`
        );
        const data = await res.json();
        if (selectValue === "All") {
          try {
            fetchData();
          } catch (err) {
            console.log(err);
          }
          return;
        }

        setCountries(data);
      };

      try {
        fetchSelect();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const showDetails = (code) => {
    navigate(`/${code}`);
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className={`app  ${darkMode ? "darkMode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />
      <Routes>
        <Route
          path="/"
          element={
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
                  <select ref={regionRef} onChange={selectRegion}>
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
                {!noCountriesFound ? (
                  countries.map((country) => {
                    return (
                      <Country
                        country
                        darkMode={darkMode}
                        key={country.cca2}
                        code={country.cca2}
                        name={country.name.common}
                        capital={country.capital}
                        population={country.population}
                        region={country.region}
                        flag={country.flags.png}
                        showDetails={showDetails}
                      />
                    );
                  })
                ) : (
                  <p>No countries found...</p>
                )}
              </div>
            </main>
          }
        ></Route>

        {/* <Route
          path="/"
          element={
            <Body
              darkMode={darkMode}
              onClick={switchMode}
              countries={countries}
              countriesInputRef={countriesInputRef}
              regionRef={regionRef}
              searchCountrie={searchCountrie}
              setCountries={setCountries}
            />
          }
          onClick={switchMode}
        /> */}
        <Route
          path="/:countryCode"
          element={
            <CountryDetail
              darkMode={darkMode}
              countries={countries}
              goBack={goBack}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
