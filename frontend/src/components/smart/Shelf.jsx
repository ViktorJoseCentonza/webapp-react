import { useMovies } from "../../contexts/MovieContext";
import ShelfUi from "../dumb/ShelfUi";
import LoadingUi from "../dumb/LoadingUi";
import ServerErrorPage from "../../pages/ServerErrorPage";
export default function Shelf() {

    const { movies } = useMovies()

    switch (movies.state) {
        case 'loading':
            return <LoadingUi />

        case 'success':
            return <ShelfUi data={movies.movie_data} />

        case 'error':
            return <ServerErrorPage error={movies.message} />
    }

}