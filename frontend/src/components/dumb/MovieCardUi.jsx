import ReviewsUi from "./ReviewsUi"
import RatingUi from "./RatingUi"

export default function MovieCardUi(props) {
    const singleMovie = props.data.movie_data
    console.log(singleMovie)
    return (
        <>
            <div className="container pt-5">
                <div className="p-2 d-flex bg-dark rounded">
                    <div className="w-25">
                        <img className="card-img-top" src={`http://localhost:3000/${singleMovie[0].image}`} alt={`${singleMovie[0].title}-img`}></img >
                    </div>
                    <div className="ps-4 w-75">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="card-title">{singleMovie[0].title}</h2>
                            <div className="d-flex">
                                <span>Average rating:</span>
                                <RatingUi vote={singleMovie[0].average_rating} />
                            </div>

                        </div>
                        <p className="mt-2 movie_info fs-5">{singleMovie[0].abstract}</p>

                        <span>Released in {singleMovie[0].release_year}</span>




                    </div>
                </div>


                <ReviewsUi data={singleMovie} />
            </div>
        </>
    )
}