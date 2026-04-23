import RatingStars from "./RatingStars"

function ProductCard({ name, price, rating, reviews, inStock, category, image, description, originalPrice, isDiscount }) {

    const discountPercentage = isDiscount && originalPrice > price
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;


    function handleAddToCart() {
        if (inStock) { alert(`Added "${name}" to cart! Price: $${price.toFixed(2)}`); }
    }
    return (
        <div className={`product-card${!inStock ? " unavailable" : ""}`}>
            <div className={`badge ${inStock ? "badge-green" : "badge-red"}`}>
                <span className="discount-badge">-{discountPercentage}%</span>
                {inStock ? "In Stock" : "Out of Stock"}
                
            </div>
            <img src={image} alt={name} className="product-img" />

            <span className="category">{category}</span>
            <h3>{name}</h3>
            <span className="description">{description}</span>

            <div className="rating">
                <RatingStars rating={rating} reviews={reviews} />
            </div>

            <div className="card-footer">

                <div className="price-container">
                    {isDiscount && (
                        <div className="price-row">
                            <span className="old-price">${originalPrice.toFixed(2)}</span>
                            <span className="discount-badge">-{discountPercentage}%</span>
                        </div>
                    )}
                    <strong className="price">${price.toFixed(2)}</strong>
                </div>

                <button
                    onClick={handleAddToCart}
                    disabled={!inStock}
                    className="add-btn"
                >
                    {inStock ? "Add to Cart" : "Unavailable"}
                </button>
            </div>
        </div>
    );
}
export default ProductCard;