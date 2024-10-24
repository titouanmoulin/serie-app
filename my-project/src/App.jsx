import { useState, useEffect } from "react";
import useFetch from './hook/useFetch'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"



export default function App() {

  const searchserie1 = "https://api.tvmaze.com/shows"
  const [searchSerie, setSearchSerie] = useState(searchserie1);

  let handlerSubmit = (e) => {
    e.preventDefault();
    const filmUrl = new FormData(e.target).get("film");
    setSearchSerie(searchserie1 + filmUrl)
  };


  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch(searchSerie);
  
  
  console.log(showData);

  const backgroundImageUrl = showData && showData.image ? showData.image.original : '';

  return (
    <article className="bg-background h-screen"> 
      <nav className="bg-gradient-to-b from-black to-pink-500/0 flex justify-between items-center py-5 px-10">
        <img className="w-20" src="/logo-flopvideo.svg" alt="Bande de flopeurs" />
        <div className="py-2 pl-5 pr-2 h-fit rounded-xl bg-white border-white border-2">
            <form onSubmit={handlerSubmit}>
            <input
              className="bg-white focus:outline-none focus:ring-0 placeholder:text-black text-black"
              type="text"
              name="film"
              placeholder="Rechercher"

            />
            <Button size="icon" variant="ghost" type="submit"><svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg></Button>
          </form>
        </div>
      </nav>

   <section 
      className={`h-4/5 w-full`}
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col gap-10 items-start justify-end h-full pl-10 pb-20 bg-gradient-to-t from-black/100 via-black/0 to-pink-500/0">
        <h1 className="text-8xl font-bold">{showData.name}</h1>
        <div className="flex gap-5">
          {showData.genres.map((genre,index) => (
            <Badge variant="default" id={index}> {genre} </Badge>
            ))}
        </div>  
      </div>
    </section>


    <section className="flex flex-col gap-5">
      <h2 className="font-medium text-3xl"> Tendances </h2>
        {showData && showData.image.map((image,index) => (
          <img id={index} src={image.original} alt={showData.name} />
        ))}
    </section>


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


          <section>

          </section>
    </article>
  )
}