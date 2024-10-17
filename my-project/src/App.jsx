import { useState } from "react";
import useFetch from './hook/useFetch'

export default function App() {
  // const [searchSerie, setSearchSerie] = useState("breaking bad");

  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
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
