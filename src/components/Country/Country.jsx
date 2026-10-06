const Country = ({country}) => {
    const { name, flags, capital, region, population } = country
    return (
        <div className="card bg-base-100 shadow-md">
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
            </div>
        </div>
    );
};

export default Country;
