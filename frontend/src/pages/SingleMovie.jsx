import { useParams } from "react-router-dom"
import useSingleMovieFetch from "../hooks/useSingleMovieFetch"

export default function SingleMovie() {
    const { id } = useParams();
    const singleMovie = useSingleMovieFetch(id)

    console.log(singleMovie.movie_data)
    switch (singleMovie.state) {
        case 'loading':
            return <h1>loading...</h1>

        case 'success':
            return (
                <h1>I'm the single movie page for {singleMovie.movie_data[0].title}!</h1>
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
