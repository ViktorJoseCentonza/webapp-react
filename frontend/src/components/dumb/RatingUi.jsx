export default function RatingUi(props) {
    const review = props
    let rating = props.vote
    const stars = []
    //console.log(rating)
    for (rating; rating > 0; rating--) {
        stars.push('*')
    }
    console.log(stars)
    return (
        <div className="star-container d-flex gap-1">
            {stars.map((_, i) => {
                return (
                    <img className="" key={i} src="/star.svg"></img>
                )
            })}
        </div>
    )
}