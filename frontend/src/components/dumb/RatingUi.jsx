export default function RatingUi(props) {
    let rating = props.vote
    const stars = []
    //console.log(rating)
    for (rating; rating > 0; rating--) {
        stars.push('*')
    }
    console.log(stars)
    return (
        <div className="star-container d-flex gap-1">
            {stars.map((star, i) => {
                return (
                    <img className="" key={`rating-`} src="/star.svg"></img>
                )
            })}
        </div>
    )
}