import { useState, useTransition, useEffect } from "react"
import { getCountryAllData, getCountryData } from "../api/postApi"
import { Loader } from "../components/UI/Loader"
import { CountryCard } from "../components/Layout/CountryCard"
import { SearchFilter } from "../components/UI/SearchFilter"

export const Country = () =>{
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])
    const [ search, setSearch] = useState("")
    const [ filter, setFilter] = useState("all")


    useEffect(()=>{
        startTransition(async()=>{
            const res = await getCountryData()
            // console.log(res.data);
            setCountries(res.data)
            const res1 = await getCountryAllData()
            // console.log(res1.data);
            
        })
    },[])

    if(isPending) return <Loader/>

    console.log(search, filter);

    const searchCountry = (country)=>{
        if(search) return country.name.common.toLowerCase().startsWith(search.toLowerCase())
        return country
    }

    const filterRegion = (country) =>{        
        if(filter === "all") return country
        return country.continents[0] === filter
    }

    //here filter logic
    const filterCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country))



    return <>
        <section className="country-section">

            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries = {setCountries} />

            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((currCountry, index)=>{
                        return <CountryCard key={index} country={currCountry} />
                    })
                }
            </ul>
        </section>
    </>
}