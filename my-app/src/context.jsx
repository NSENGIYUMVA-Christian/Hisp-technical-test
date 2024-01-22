import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {

///////////////////////////////////////////////////all state/////////////
 const [allCountries, setAllCountries] = useState([])
 const [filteredAllCountries, setFilteredAllCountries] = useState([])
 const [isLoading, setIsLoading] = useState(true)


 /////////////////////////////////////////////utils functions

  //function to get all countries
  const getAllCountries = async () => {
    try {
      // destructured data from axios response
      const {data} = await axios.get(`https://restcountries.com/v3.1/all`);
      // set all countries state to returned response
     setAllCountries(data)
     setFilteredAllCountries(data)

      //console.log("here is all countries",data)
     setIsLoading(false);
/// notify user if success
//toast.success("Success")
    } catch (error) {
     setIsLoading(false)
     console.log("error",error)
    }
  };


/////////////////////main return
  return (
    <GlobalContext.Provider value={{getAllCountries,allCountries,isLoading,filteredAllCountries, setFilteredAllCountries}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;