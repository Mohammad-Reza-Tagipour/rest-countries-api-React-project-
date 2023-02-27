import React from "react";

function Country({
  darkMode,
  name,
  capital,
  population,
  region,
  flag,
  showDetails,
  code,
}) {
  const showDetailsHandler = () => {
    showDetails(code);
  };
  return (
    <section
      className={`country ${darkMode ? "darkMode" : ""}`}
      onClick={showDetailsHandler}
    >
      <div className="flags">
        <img src={flag} alt="" />
      </div>

      <div className={`detail ${darkMode ? "darkMode" : ""}`}>
        <h3 className="country-name">{name}</h3>
        <p>
          Population:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {population}
          </span>
        </p>
        <p>
          Region:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {region}
          </span>
        </p>
        <p>
          Capital:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {capital}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Country;
