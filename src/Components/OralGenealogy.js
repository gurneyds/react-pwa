import React, { useEffect, useState } from "react"
import OnlineStatus from "./OnlineStatus"
import "./OralGenealogy.css"
import BackBtn from './BackBtn'

export default function OralGenealogy() {
  const [countries, setCountries] = useState()
  const [selectedCountry, setSelectedCountry] = useState()
  const [filterByRecords, setFilterByRecords] = useState(() => false)

  useEffect(() => {
    async function getCountries() {
      fetch('http://localhost:8080/api/countries', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          setCountries(data)
        })
        .catch(err => console.error(err))
    }

    getCountries()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function countrySelected(event) {
    const selectedCountry = countries.find(country => Number(country.id) === Number(event.target.value))
    if (selectedCountry) {
      setSelectedCountry(selectedCountry)
    }
  }

  function filterChanged(event) {
    setFilterByRecords(event.target.checked)
  }

  const filteredCountries = filterByRecords ? countries.filter(country => country.recordCount > 0) : countries

  return <div className="oralGenContainer">
    <OnlineStatus />
    <BackBtn />

    <h1>Oral Geneology</h1>

    {countries && <>
      <div>
        Select a Country to search
      </div>

      <input id="filter" type="checkbox" onChange={filterChanged}/>
      <label for="filter">Only show countries that have records</label>

      <div>
        <select onChange={countrySelected}>
          {filteredCountries.map(country => {
            return (<option value={country.id}>{country.name}</option>)
          })}
        </select>
    </div>
    {selectedCountry &&
      <div className="oralGenDetails">
        <div>Name: {selectedCountry.name}</div>
        <div>Population: {selectedCountry.population}</div>
        <div>Subregion: {selectedCountry.subRegion}</div>
        <div>Number of FamilySearch Records: {selectedCountry.recordCount}</div>
      </div>
    }
    </>
    }
  </div>
}