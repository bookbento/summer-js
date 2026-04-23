function RatingStars({ rating, reviews }) {
    const fullStar = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
        <div className="rating">
            <span>
                {"⭐".repeat(fullStar)}
                {hasHalf ? "⭐" : ""}
                {"☆".repeat(5 - fullStar - (hasHalf ? 1 : 0))}
            </span>
            <span className="review-count">({reviews} reviews)</span>
        </div>
    );
}

export default RatingStars;