
const CountryCard = ({country}) => {
    const name = country.name.common;
    const capital = country.capital[0];
    const area = country.area;
    const langsObj = country.languages;
    
    const convertLangaugesObj = () => {
        let langsArray = [];

        for(const prop in langsObj) {
            langsArray.push(langsObj[prop]);
        }

        return langsArray;
    }

    convertLangaugesObj();

    return (
        <div>
            <h1>{name}</h1>
            <div>
                <p>
                    capital {capital}<br />
                    area {area}
                </p>
                <h3>languages:</h3>
                <ul>
                    {convertLangaugesObj().map(lang => {
                        return <li key={lang}>{lang}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CountryCard;