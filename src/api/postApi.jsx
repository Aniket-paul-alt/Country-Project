import axios from "axios"

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

//HTTP GET METHOD
export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags,continents")
}
export const getCountryAllData = () =>{
    return api.get("/all")
}

//HTTP GET METHOD FOR THE INDIVIDUAL COUNTRY DATA
export const getCountryIndData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,area,continents,population,region,subregion,capital,tld,currencies,languages,borders,flags,timezones`)
}


