import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"
import Episode from './Episode.jsx'


export default function Movie({ movie }) {

    console.log(movie)

    if (movie == null) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <>
            <div className="relative">
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