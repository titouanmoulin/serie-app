import { useState, useEffect } from "react";
import useFetch from './hook/useFetch'
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Movie from './Movie.jsx'

export default function App() {
  const serieurl = "https://api.tvmaze.com/shows/1?embed[]=episodes&embed[]=images"
  
  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch(serieurl);

  return (
    <>

      {/* <form onSubmit={handlerSubmit}>
        <input
          className="border-black border-2"
          type="text"
          name="film"
          placeholder="Search for a series..."

        />
        <Button type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg></Button>
      </form>
      <div>
        {isLoadingShow && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
        {showData &&
          <div>
            <div>
              <img src={showData.image.medium} alt={showData.name} />
            </div>
          </div>
        }
        {showError && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
      </div> */}
      <Movie movie={showData}/>

    </>
  )
}