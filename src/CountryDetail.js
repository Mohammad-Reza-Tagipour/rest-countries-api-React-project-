import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router";
const CountryDetail = ({ darkMode, countries, goBack }) => {
  const params = useParams();
  const navigate = useNavigate;

  let namee;
  let flag;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];
  // currencies = countries[0].currencies[0].name;

  countries.map((country) => {
    if (country.cca2 === params.countryCode) {
      namee = country.name.common;
      flag = country.flags.png;
      nativeName = country.name.common;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.tld;
      // country.currencies?.forEach((currency) => {
      //   currencies.push(currency.name);
      // });
      // country.currencies.forEach((currency) => {
      //   currencies.push(currency.name);
      // });
      // country.languages?.forEach((language) => {
      //   languages.push(language.name);
      // });
    }
  });

  // const goBack = () => {
  //   navigate("/");
  // };
  return (
    <div className="country-details">
      <button
        className={`back-button ${darkMode ? "darkMode" : ""}`}
        onClick={goBack}
      >
        <ArrowBackIcon />
        <p>Back</p>
      </button>
      <div className="country-details-body">
        <div className="img-box">
          <img src={flag} alt="" />
        </div>
        <div className="info">
          <h2>{namee}</h2>
          <div className="info-container">
            <div className="info-left">
              <p>
                Native Name:
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {nativeName}
                </span>
              </p>
              <p>
                Population:
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {population}
                </span>
              </p>
              <p>
                Region:
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {region}
                </span>
              </p>
              <p>
                Sub region:
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {subregion}
                </span>
              </p>
            </div>
            <div className="info-right">
              <p>
                Capital:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {capital}
                </span>
              </p>
              <p>
                Top-level Domain:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {topLevelDomain}
                </span>
              </p>
              {/* <p>
                Currencies:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}> */}
              {/* {currencies.map((currency) => {
                    if (
                      currencies.indexOf(currency) !==
                      currencies.length - 1
                    ) {
                      return (
                        <span
                          className={`values ${darkMode ? "darkMode" : ""}`}
                        >
                          {" "}
                          {currency},
                        </span>
                      );
                    } else {
                      return (
                        <span
                          className={`values ${darkMode ? "darkMode" : ""}`}
                        >
                          {" "}
                          {currency},
                        </span>
                      );
                    }
                  })} */}
              {/* {countries[0]?.demonyms.eng.f}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p> */}
            </div>
          </div>
          {/* <span>Border Countries:</span>
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>Test</p>
          </div>
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>Test</p>
          </div>
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>Test</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
