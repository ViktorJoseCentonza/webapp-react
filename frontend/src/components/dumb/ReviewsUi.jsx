import { useState } from "react";
import RatingUi from "./RatingUi"
import { useAuth } from '../../contexts/AuthContext'

export default function ReviewsUi(props) {
    const [review, setReview] = useState('');
    const [starsNumber, setStarsNumber] = useState(0)
    const reviews = props.data[0].reviews
    const movieId = props.movieId
    const { userData } = useAuth()
    console.log(userData)
    //console.log(reviews)


    function sendReview(review, movieId, username, rating) {

        if (!userData) {
            console.warn("User not logged in!");
            return;
        }

        fetch(`http://localhost:3000/movies/review/${movieId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: review,
                movie_id: movieId,
                name: username,
                vote: rating
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log("✅ Review submitted:", data);
                setReview("");
            })
            .catch(error => {
                console.error("❌ Error submitting review:", error);
            });
    }


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

            <div className="card mb-3 bg-dark text-center mt-2 p-3">
                <label htmlFor="review" className="form-label text-light">
                    Leave a Review
                </label>
                <form onSubmit={(e) => {
                    e.preventDefault(); // Prevent form from reloading the page
                    sendReview(review, movieId, userData.username, starsNumber);
                }}>
                    <textarea
                        id="review"
                        name="review"
                        className="form-control"
                        rows="4"
                        placeholder="Write your thoughts here..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                    <RatingUi vote={starsNumber} useState={setStarsNumber}></RatingUi>
                    <div className="text-center mt-2">
                        <button
                            type="submit"
                            className="btn btn-light"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>




        </section>

    )
}