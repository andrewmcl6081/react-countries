import './Display.css';
import CountryCard from './CountryCard';

const Display = ({countries}) => {
    const numCountries = countries.length;

    if(numCountries > 10) {
        return <span>Too many matches, specify another filter</span>
    }
    else if(numCountries <= 10 && numCountries > 1) {
        return (
            <ul className='short-list'>
                {countries.map(country => <li key={country.latlng}>{country.name.common}</li>)}
            </ul>
        )
    }
    else if(numCountries === 1) {
        return (
            <CountryCard country={countries[0]}/>
        )
    }
    else {
        return (
            <span>No matching results</span>
        )
    }
}

export default Display