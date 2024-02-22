import React from "react";
import './Reviews.css';

const reviews = [
    {
        text: "Amazing taste!",
        content: "Egg Master has completely transformed my breakfast routine. Their products are always fresh and bursting with flavor.",
        sig: "Emily S."
    },
    {
        text: "Great service",
        content: "Impressed by the prompt delivery and the quality of the products. Egg Master never disappoints!",
        sig: "Michael R."
    },
    {
        text: "Excellent quality",
        content: "I've been a loyal customer of Egg Master for years, and their commitment to quality has never wavered. Highly recommended!",
        sig: "Sophia L."
    }
];

function Reviews() {
    return (
        <div className="reviewsContainer d-flex justify-content-center align-items-center">
            <div>
                <h1 className="reviewHeader text-center">Raving reviews from our customers</h1>
                <div className="reviewSlider">
                    {reviews.map((review, index) => (
                        <div key={index} className="review">
                            <h1 className="reviewText">"{review.text}"</h1>
                            <h1 className="reviewContent">{review.content}</h1>
                            <h1 className="reviewSig">{review.sig}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews;