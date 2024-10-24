import { useState, useEffect } from "react";
import useFetch from './hook/useFetch'

export default function App() {
  const searchserieurl = "https://api.tvmaze.com/singlesearch/shows?q="
  const [searchSerie, setSearchSerie] = useState(searchserieurl +"squid game");

  let handlerSubmit = (e) => {
    e.preventDefault();
    const filmUrl = new FormData(e.target).get("film");
    setSearchSerie(searchserieurl + filmUrl)
  };


  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch(searchSerie);

  return (
    <>

      <form onSubmit={handlerSubmit}>
        <input
          className="border-black border-2"
          type="text"
          name="film"
          placeholder="Search for a series..."

        />
        <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
      </form>
      <div>
        {isLoadingShow && <p>isloading</p>}
        {showData &&
          <div>
            <div>
              <img src={showData.image.medium} alt={showData.name} />
            </div>
          </div>
        }
        {showError && <p>non</p>}
      </div>


    </>
  )
}