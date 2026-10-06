import { use } from "react";
import Country from "../Country/Country";

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h3 className="text-center text-3xl mb-8">All Countries: {countries.length}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    countries.map((country) => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
