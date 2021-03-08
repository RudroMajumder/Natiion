import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'; 
import Countries from '../Countries/Countries'
import './Main.css'
const Main = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then( res => res.json())
        .then( data => setCountries(data) )
    },[]) 

    return (
        <div className="main">
            {
                countries.map(country => <Countries country={country}> </Countries>)
            }
        </div>
    );
};

export default Main;