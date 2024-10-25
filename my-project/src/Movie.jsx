import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"
import Episode from './Episode.jsx'
import useFetch from './hook/useFetch'
import { Button } from "@/components/ui/button"

export default function Movie({ idserie, setPage }) {
    const handleClick = () => {
        setPage("accueil");
    };

    // console.log(movie)
    const serieurl = `https://api.tvmaze.com/shows/${idserie}?embed[]=episodes&embed[]=images`;

    const {
        data: movie,
        isLoading: isLoadingShow,
        error: showError,
    } = useFetch(serieurl);


    if (movie == null) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <>
            <div className="relative">
                <Button onClick={handleClick} variant="serie">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Button>

                <img src={movie._embedded.images[23].resolutions.original.url} alt="" />

                <div className="flex flex-col gap-2 absolute bottom-5 left-5 w-[75%]">
                    <h1 className="text-4xl font-bold">{movie.name}</h1>
                    <div className="flex justify-between mb-5">
                        <ul className="flex gap-3">
                            <li><Badge variant="secondary">{movie.premiered}</Badge></li>
                            {movie.genres.map((genre, index) => (
                                <Badge variant="secondary" key={index}>{genre}</Badge>
                            ))}
                        </ul>
                        <Badge variant="secondary">{movie.rating.average}/10</Badge>

                    </div>
                    <p className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: movie.summary }} />
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4">

                <h2>Saison 1</h2>
                <ul className="flex flex-col gap-3">

                    {movie._embedded.episodes.map((episode, index) => (
                        <Episode ep={episode} key={index} />
                    ))}
                </ul>
            </div>
        </>
    )
}