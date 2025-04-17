import { useEffect, useState } from "react";

export default function useSingleMovieFetch(id) {
    const [singleMovie, setSingleMovie] = useState({
        state: "loading"
    });

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (!data.error) {
                    setSingleMovie({
                        state: "success",
                        movie_data: data
                    })
                } else {
                    setSingleMovie({
                        state: "error",
                        message: `You weren't supposed to get here! 404`
                    })
                }
            })
            .catch((err) => {
                setSingleMovie({
                    state: "error",
                    message: `error type: ${err}`
                })
            })
    }, [id])

    return singleMovie
}