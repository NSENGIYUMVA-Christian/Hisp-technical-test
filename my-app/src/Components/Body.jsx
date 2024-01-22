import React, { useEffect ,useState} from 'react'
import { useGlobalContext } from '../context';
import styled from "styled-components";
import CountryCard from './CountryCard';
import BarChart from "./BarChart"
import AreaChart from "./AreaChart"


const Body = () => {

    //////////// getting and destructuring data from global context
   const {getAllCountries,allCountries,isLoading,filteredAllCountries, setFilteredAllCountries} =  useGlobalContext()

   ///////////////state to track the searched item on countries
const [allSearch, setAllSearch] = useState({
    searchName: ""
  });
  ////// toggle chart to view state
const [isAreaChart,setIsAreaChart] = useState(false)
//////// state to track sorting value of country
  const [sortType, setSortType] = useState("");
  //// state to handle stating and ending graph to be shown on graphy
  const [navIndex,setNavIndex] =  useState({
    startingIndex:0,
    endingIndex:20
  })

  //// number of countries to be shown per chart
  const countriesPerChart = 20

/// filtering reports data
 let reportData = allCountries.map((country)=>{
   const data = {
    name: country?.name?.common,
    population:country?.population
   } 
 return data
 })

 //reportData = reportData.slice(navIndex.startingIndex,navIndex.endingIndex)

////////////////////utils functions
  //// search handle change function
  const handleSearchOnChange = (e)=>{
    const {name,value} = e.target
    setAllSearch((prev)=>{
      return {...prev,[name]:value}
    })
  
  
  }
   ///// handle sort change
   const handleSortChange = (e) => {
    const { value } = e.target;
    setSortType(value);
  };

   //// Implement search functionality
useEffect(() => {
    const { searchName } = allSearch;
    let tempFilteredCountries = []
    //// iterate through all countries
    for(let i=0; i<allCountries.length;i++)
    {
        //// filter countries based on inserted name which matches any country name
        tempFilteredCountries  = allCountries.filter((country) => {
            return (
              (searchName === "" || country?.name?.common.toLowerCase().includes(searchName.toLowerCase()))
            
            );
          });
    }
    //// update filtered countries based on searched value
   setFilteredAllCountries(tempFilteredCountries);
  }, [ allSearch]);


  //// filter countries when due to region
useEffect(() => {
    if (sortType === "all") {
      setFilteredAllCountries(allCountries);
    } else if (sortType) {
      setFilteredAllCountries(allCountries.filter((country) => country.region === sortType));
    }
  else {
      return;
    }
  }, [sortType]);


   /// invoke all countries on initial render
   useEffect(()=>{
    getAllCountries()
   // console.log("all countries",allCountries)
   },[])


   ///// if there is an API request show loading
   if(isLoading)
   {
    return <h1>Please wait...</h1>
   }

   /// main return
  return (
    < Wrapper>
    <h1>Welcome to Earth countries</h1>
    <p>Get brief insight of all countries</p>


 {/* Navigation buttons next and prev */}
 <div className='next-prev-container' >
      <button type="button">
        Prev 30 countries
      </button>
      <button type="button" >
        Next 30 countries
      </button>
      </div>
    {/* stats section */}
   <h3>All Countries Population Chart</h3>
   <p>Hover over to see each countries total population</p>
   <button onClick={()=>setIsAreaChart((prev)=>!prev)} > {isAreaChart ? "Change to Bar chart": "Change to Area chart"}   </button>
   {/* bar chart section */}
   {
    isAreaChart ? <AreaChart reportData={reportData} /> : <BarChart reportData={reportData} />
   }
   
   
   

      {/*  search  and sorting section */}
      <div className='search-and-sorting-container' >
        <div className='search-container'>
        <h3 >Search any country name</h3>
    <input name="searchName" value={allSearch.searchName}  onChange={handleSearchOnChange}  type="text" placeholder="enter country name" />
   
        </div>
      {/* sorting container */}
    <div className='sort-container'  >
    <h3 >Sort countries</h3>
    <select
              value={sortType}
              onChange={handleSortChange}
              name="sortType"
            >
              <option value="">--select continent--</option>
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Americas">Americas</option>
              <option value="Oceania">Oceania</option>
            </select>
    </div>
      </div>
   
   

{/* All countries container */}
<h3>Number of countries: {filteredAllCountries.length}</h3>
   <p>Scroll to see all countries</p>
    <main className='all-countries-container' >
     
    {filteredAllCountries.length === 0 ? <h1>No country found</h1> :filteredAllCountries.map((country,index)=>{
        return <CountryCard  key={index} country={country}  />
    })}
    </main>
   
    </ Wrapper>
  )
}

export default Body



//////////styles
const Wrapper = styled.section`

overflow-y:auto;
background-color:#6ba3c4;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid green;
button{
    color:white;
    background-color:#026240;
    padding:5px;
    border-radius:5px
}
.search-and-sorting-container{
    border:1px solid green;
    margin-bottom:10px;
    padding:10px;
    border-radius:5px;
    select,input{
        border:1px solid black;
        border-radius:3px;
        padding:5px
    }
}
.all-countries-container{
    border:3px solid green;
    padding:5px;
    display:flex;
    flex-direction:column;
    gap:5px;
    max-height:300px;
    overflow-y:auto;
    margin-bottom:25px
}
`