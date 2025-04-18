import RatingUi from "./RatingUi"

export default function ReviewsUi(props) {
    const reviews = props.data[0].reviews
    //console.log(reviews)
    return (
        <section className="mt-5">
            {reviews.map((review, i) => {
                return (
                    <div className="p-2 mt-2 bg-dark rounded" key={`review-${review.name}-${i}`}>
                        <div className="d-flex justify-content-between">
                            <h6>{review.name}</h6>
                            <RatingUi vote={review.vote} /></div>
                        <span>{review.text}</span>
                    </div>
                )
            })}

            <div class="mb-3 text-center ">
                <label for="" class="form-label"></label>
                <textarea class="form-control bg-dark" name="" id="Add your review here!" rows="3"></textarea>
                <button
                    type="submit"
                    class="btn btn-light mt-3"
                >
                    Submit
                </button>

            </div>

        </section>

    )
}