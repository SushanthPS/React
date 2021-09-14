function findColor(rating) {
    if (rating >= 4) return "#72A02B";
    else if (rating >= 2) return "#DB7C38";
    else return "red";
}

export default function RestaurantDetails({ obj }) {
    let color = findColor(obj.rating);
    return (
        <div className="card cflex">
            <div className="card-part-1 rflex">
                <div>{/* <img src={obj.image} alt="" /> */}</div>
                <div className="card-details">
                    <h1>{obj.restaurantName}</h1>
                    <p>{obj.categories.join(", ")}</p>
                    <p>Cost &#8377;{obj.cost_for_one} for one</p>
                    <p>Min &#8377;{obj.min}</p>
                    <p>Accepts {obj.payment.join(", ")} payments</p>
                </div>
                <div className="card-rating">
                    <div style={{ backgroundColor: color }}>{obj.rating}</div>
                    <p className="fs8">{obj.votes} votes</p>
                    <p className="fs8">{obj.reviews} reviews</p>
                </div>
            </div>
            <div className="card-part-2 rflex">
                <div className="order-online rflex">
                    <p>Order Online</p>
                    <p>&#707;</p>
                </div>
            </div>
        </div>
    );
}
