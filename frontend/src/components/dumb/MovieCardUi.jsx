export default function MovieCardUi(props) {
    const singleMovie = props.data.movie_data
    console.log(singleMovie)
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="card movie_card pt-3">
                        <img src={`http://localhost:3000/${singleMovie[0].image}`} className="card-img-top" alt="..."></img >
                        <div className="card-body">
                            <h5 className="card-title">{singleMovie[0].title}</h5>
                            <span className="movie_info">{singleMovie[0].abstract}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}