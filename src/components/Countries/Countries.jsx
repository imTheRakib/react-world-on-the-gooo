import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (country) => {
    console.log("Flag need to be added", country);
    setVisitedFlags([...visitedFlags, country]);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-center text-3xl mb-8">
        All Countries: {countries.length}
      </h3>
      <h4 className="text-2xl text-center mb-8">
        Total Countries Visited: {visitedCountries.length}
      </h4>
      <ol style={{ margin: "20px", textAlign: "center" }}>
        {visitedCountries.map((visitedCountry) => (
          <li key={visitedCountry.cca3.cca3}>{visitedCountry.name.common}</li>
        ))}
      </ol>
      <div className="m-5 p-5">
        {visitedFlags.map((country) => (
          <img
            key={country.cca3.cca3}
            src={country.flags.flags.png}
            className="h-8 w-8 inline mr-5"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
