import { useParams } from "react-router-dom"
import useSingleMovieFetch from "../../hooks/useSingleMovieFetch"
import MovieCardUi from "../dumb/MovieCardUi";
import ServerErrorPage from "../../pages/ServerErrorPage";
import LoadingUi from "../dumb/LoadingUi";

export default function SingleMovie() {
    const { id } = useParams();
    const singleMovie = useSingleMovieFetch(id)

    //console.log(singleMovie.movie_data)
    switch (singleMovie.state) {
        case 'loading':
            return <LoadingUi />

        case 'success':
            return <MovieCardUi data={singleMovie} />

        case 'error':
            return <ServerErrorPage error={singleMovie.message} />
    }
}
