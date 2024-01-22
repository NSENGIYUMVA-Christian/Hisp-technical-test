import React from 'react'
import styled from "styled-components";

const CountryCard = ({country}) => {

  /// destructuring main properties from each country
  const  {name ,population,region} = country 

  //// declaring well readable variables
  const countryName = name?.common
  const CountryPopulation = population
  const CountryRegion = region

  //// main return
    return (
    <Wrapper>
        <h3>Country name: {countryName || ""}</h3>
        <p>Total population: {CountryPopulation  || ""}</p>
        <p>Region: {CountryRegion  || ""}</p>
    </Wrapper>
  )
}

export default CountryCard


/////////// component styles
const Wrapper = styled.article`
    border:1px solid green;
    max-width:500px;
    background-color:#015e34;
    color:white;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:5px
   
`