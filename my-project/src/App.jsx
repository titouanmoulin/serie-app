<<<<<<< HEAD
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
=======
import { useState } from "react";
import useFetch from './hook/useFetch'

export default function App() {
  // const [searchSerie, setSearchSerie] = useState("breaking bad");
>>>>>>> main

  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
<<<<<<< HEAD
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
      {showError && <h1>Pas de résultats</h1>}
      <div>
        <img src={showData.image.medium} alt={showData.name} />
      </div>
    </div>
  )
}

=======
  } = useFetch('https://api.tvmaze.com/singlesearch/shows?q="breaking bad"');

  console.log(showData);
  
  if (isLoadingShow) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (

    <div>
    </div>
  )
}
>>>>>>> main
