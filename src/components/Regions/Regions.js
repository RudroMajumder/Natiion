import React from 'react';
import { useEffect, useState } from 'react';

const Regions = () => {
    const [countries,setCountries] = useState({});
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then( res => res.json())
        .then( data => setCountries(data) )
    },[])
    console.log(countries[0].region)

    return (
        <div>
            {countries.length}
        </div>
    );
};

export default Regions;