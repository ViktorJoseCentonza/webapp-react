import RatingUi from "./RatingUi"
import { NavLink } from "react-router-dom"
export default function ShelfUi(props) {
    const movieList = props.data
    //console.log(movieList)
    return (
        <>
            <h1 className="ps-5">Current movies</h1>
            <div className="d-flex gap-3 justify-content-center">

                {movieList.map((singleMovie, index) => {
                    //{ console.log(singleMovie) }
                    return (
                        <NavLink key={`${singleMovie.title}-card-${index}`
                        } to={`/movie/${singleMovie.id}`}>
                            <div className="p-2 bg-dark rounded position-relative d-flex flex-column justify-content-between align-items-center" >
                                <div className="img-wrap">
                                    <img className="img-fluid" style={{ height: "280px" }} src={`http://localhost:3000/${singleMovie.image}`} alt="" />
                                </div>

                                <div className="mt-2">
                                    <RatingUi vote={singleMovie.average_rating} />
                                </div>


                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </>
    )
}

{/* <div className="p-2 d-flex bg-dark rounded">
    <div className="w-25">
        <img className="card-img-top" src={`http://localhost:3000/${singleMovie[0].image}`} alt={`${singleMovie[0].title}-img`}></img >
    </div>
    <div className="ps-4 w-75">
        <h2 className="card-title">{singleMovie[0].title}</h2>
        <p className="mt-2 movie_info fs-5">{singleMovie[0].abstract}</p>
        <span>Released in {singleMovie[0].release_year}</span>

    </div>
</div> */}