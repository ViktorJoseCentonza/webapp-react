import { useParams } from "react-router-dom"
import useSingleMovieFetch from "../hooks/useSingleMovieFetch"
import MovieCardUi from "../components/dumb/MovieCardUi";
export default function SingleMovie() {
    const { id } = useParams();
    const singleMovie = useSingleMovieFetch(id)

    //console.log(singleMovie.movie_data)
    switch (singleMovie.state) {
        case 'loading':
            return <h1>loading...</h1>

        case 'success':
            return (
                <>
                    <MovieCardUi data={singleMovie} />
                </>
            )

        case 'error':
            return (
                <>
                    <h1>{movies.state}</h1>
                    <span>{movies.message}</span>
                </>
            )
    }
}
