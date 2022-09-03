import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryType } from './types';
import Country from './components/Country'
//import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Loading from './components/Loading'

function App() {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getCountries = async() =>{
        setLoading(true);
        try {
            const { data} = await axios.get<CountryType[]>('https://restcountries.com/v2/all');
            setCountries(data);
        } catch{
            console.log("Hata olustu");
        } finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        getCountries();
    }, []);

    console.log({countries});

    return (
    <div>
        <Loading loading={loading}>
        {countries.map((country) => {
            return <Country key={country.name} country={country}/>;
        })}
        </Loading>
        
    </div>   
    );
};

export default App;