import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

 

  
const Countries = () => {

    const [countries,setCountries] = useState([])

    const [visitedCountries,setVisitedcountries] = useState([])
    const[visitedFlags,setVisitedflags] = useState([])

    useEffect(()=>
        {
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
        },[])

        const handlevisitedCountry = country =>
        {
            console.log("add this to your visited countries")
            const newVisitedcountries = [...visitedCountries,country]
            setVisitedcountries(newVisitedcountries)
            //console.log(country);
        }

        const handlevisitedflag = flag =>
        {
            console.log("visited flag");
        }

     
    return (
        <div>

            <h3>Countries : {countries.length}</h3>

            <div>
                <h5>Visited countries :</h5>
                <li>

                    {
                        visitedCountries.map(country=> <li key={country.cca3}> {country.name.common}</li>)
                    }

                </li>
            </div>

            <div className='country-container'>

            {
                countries.map(country=>
                <Country 
                key={country.cca3}
                handlevisitedCountry = {handlevisitedCountry}
                handlevisitedflag ={handlevisitedflag}
                 country={country}

                 ></Country>)
            }

            </div>

             
            
        </div>
    );
};

export default Countries;