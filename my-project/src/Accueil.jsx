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
            <Button onClick={handleClick}>Serie</Button>
        </div>
    );
}