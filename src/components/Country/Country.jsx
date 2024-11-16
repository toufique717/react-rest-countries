import { useState } from 'react';
import './Country.css'

const Country = ({ country , handlevisitedCountry,handlevisitedflag}) => {
   // console.log(country);

   const {name,flags,population,area,cca3} = country;

   const [visited,setvisited] = useState(false)

   const handlevisited = () =>
   {
    setvisited(!visited)
   }

   console.log(handlevisitedCountry);

    return (
        <div className={`country ${visited && `visited`}`}>
            <h3 style={{color:visited?'red':'blue'}}>name:{name ?.common}</h3>
            <img src={flags.png}></img>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>code:{cca3}</small></p>
            <button onClick={()=>handlevisitedCountry(country)}>Mark visitred</button>
            <br/>
            <button onClick={handlevisited}> {visited? 'Visited' : 'Going'}</button>

            <button onClick={()=>handlevisitedCountry(country.flags.png)}>add flag</button>
            {visited? 'i have visited' : 'i want to visit'}
        </div>
    );
};

export default Country;
