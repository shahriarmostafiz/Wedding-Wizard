import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useNavigate } from "react-router-dom";


const Reviews = () => {
    const [reviews, setReview] = useState(null)
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    // console.log('reviews', reviews);
    const navigate = useNavigate()
    return (
        <div>
            <h1 className="text-5xl font-special font-bold text-center">Messages from Our Clients </h1>
            <div >
                <div className="grid grid-cols-3 my-6 md:my-8 lg:my-12">
                    {
                        reviews?.slice(0, 3).map((review) => <ReviewCard key={review.review_id} review={review}></ReviewCard>
                        )
                    }

                </div>
                <div className="flex justify-center normal-case">
                    <button
                        onClick={() => navigate('/reviews')}
                        className="btn btn-outline btn-error rounded-full normal-case px-8 ">Show All </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;