import { Button } from "@/components/ui/button"
import useFetch from './hook/useFetch'


export default function Accueil({ setPage }) {
    const handleClick = () => {
        setPage("serie");
    };

    const serieurl = "https://api.tvmaze.com/shows";

    const {
        data: movie,
        isLoading: isLoadingShow,
        error: showError,
    } = useFetch(serieurl);
    console.log(movie)

    if (movie == null) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <div>
            <h1>Bonjour la team</h1>
            <Button onClick={handleClick}>Serie</Button>
            {movie.map((serie, index) => (
                <img key={index} src={serie.image.original} alt="" />
            ))}
            {/* <p>{movie[0].name}</p>
            <img src={movie[0].image.medium} alt="" /> */}

        </div>
    );
}