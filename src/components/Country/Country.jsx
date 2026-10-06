import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);

  const { name, flags, capital, region, population, area } = country;

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div
      className={`card bg-base-100 shadow-md ${visited && "country-visited"}`}
    >
      <figure className="h-60 bg-base-200">
        <img
          src={flags.flags.png}
          alt={flags.flags.alt || `Flag of ${name.common}`}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>Capital: {capital.capital?.[0] ?? "N/A"}</p>
        <p>Region: {region.region}</p>
        <p>Population: {population.population.toLocaleString()}</p>
        <p>
          Area: {area.area} :{" "}
          {area.area > 300000 ? "Big Country" : "Small Country"}
        </p>
        <button className="btn btn-secondary" onClick={handleVisited}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleVisitedFlag(country)}
        >
          Add Visited Flag
        </button>
      </div>
    </div>
  );
};

export default Country;
