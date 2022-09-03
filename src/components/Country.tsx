import React, { FunctionComponent } from 'react';
import { CountryType } from '../types';
import '../style.css';

interface ICountryProps{
    country: CountryType
}

const  Country: FunctionComponent<ICountryProps> = (props) => {
    const { country } = props;
    
    return (

        <div id="list">
            <p>            
                {country.name} - {country.capital}
                
            </p>
        </div>
    );
}

export default Country;