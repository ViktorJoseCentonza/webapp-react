import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function SingleMovie() {
    const { id } = useParams();
    const [singleMovie, setSingleMovie] = useState({
        state: "loading"
    });

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSingleMovie({
                    state: "success",
                    movie_data: data
                })
            })
            .catch((err) => {
                setSingleMovie({
                    state: "error",
                    message: `error type: ${err}`
                })
            })
    }, [])


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
