import { useEffect, useState } from "react";
import countriesService from './utility/countries';
import Display from './components/Display';

const App = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    
    useEffect(() => {
        countriesService
            .getAll()
            .then(retreivedCountries => {
                setCountries(retreivedCountries)
            })
            .catch(error => console.log(`${error}`));
    }, [])


    const handleSearchChange = (event) => {
        const input = event.target.value;
        setSearchValue(input);

        if(countries) {
            input.length > 0
                ? setFilteredCountries(countries.filter(country => {
                    return country.name.common.toLowerCase().includes(input);
                }))
                : setFilteredCountries(null);
        }
    }

    return (
        <div>
            <h1>Countries</h1>
            <form>
                find countries<input value={searchValue} onChange={handleSearchChange}/>
            </form>
            {filteredCountries === null ? null : <Display countries={filteredCountries}/>}
        </div>
    )
}

export default App;
