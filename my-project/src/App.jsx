import { useState, useEffect } from "react";
import useFetch from './hook/useFetch'

export default function App() {
  const [searchSerie, setSearchSerie] = useState("");
  const [apiUrl, setApiUrl] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchSerie(lowerCase);
  };

  useEffect(() => {
    if (searchSerie) {
      setApiUrl(`https://api.tvmaze.com/singlesearch/shows?q=${searchSerie}`);
    }
  }, [searchSerie]);

  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch(apiUrl);

  useEffect(() => {
    if (showData) {
      console.log(showData);
    }
  }, [showData]);

  return (
    <div>
      <input 
        className="border-black border-2" 
        type="search" 
        placeholder="Search for a series..." 
        onChange={inputHandler} 
      />
      {isLoadingShow && <h1>Loading...</h1>}
      {showError && <h1>Error fetching data</h1>}
      {/* <div>
        <img src={showData.image.medium} alt={showData.name} />
      </div> */}
    </div>
  )
}
