// export default function RatingUi(props) {
//     const review = props
//     let rating = props.vote
//     const stars = []
//     //console.log(rating)
//     for (rating; rating > 0; rating--) {
//         stars.push('*')
//     }
//     //console.log(stars)
//     return (
//         <div className="star-container d-flex gap-1">
//             {stars.map((_, i) => {
//                 return (
//                     <img className="" key={i} src="/star.svg"></img>
//                 )
//             })}
//         </div>
//     )
// }

//give an index and it will show that index. use useState "starsNumber" as index and the stars will update based on what star is currently hovered

export default function RatingUi(props) {
    //math round because decimals break this
    const setStarsNumber = props.useState
    const index = Math.round(props.vote)
    let starValue = 0
    const stars = Array.from({ length: index }).map((item, i) => {
        { starValue++ }
        const myId = starValue
        return (
            <span key={`full-star-${starValue}`}>
                <button onMouseEnter={() => {
                    if (typeof setStarsNumber === 'function') {
                        setStarsNumber(myId)
                    }
                }} className="btn btn-transparent text-white">
                    <i className="bi bi-star-fill"></i>
                </button>
            </span>
        )
    })

    const emptyStars = Array.from({ length: 5 - index }).map((item, i) => {
        { starValue++ }
        const myId = starValue
        return (
            <span key={`full-star-${starValue}`}>
                <button onMouseEnter={() => {
                    if (typeof setStarsNumber === 'function') {
                        setStarsNumber(myId)
                    }
                }} className="btn btn-transparent text-white">
                    <i className="bi bi-star"></i>
                </button>
            </span>
        )
    })

    return (
        <>
            <div>
                {stars}
                {emptyStars}
            </div>
        </>
    )
}