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
                <div className="card-image">
                    <img src={obj.image} alt="" />
                </div>
                <div className="card-details">
                    <div>
                        <h3>{obj.restaurantName}</h3>
                        <div>
                            <span className="gray">
                                {obj.categories.join(", ")}
                            </span>{" "}
                            <br />
                            <span className="gray">
                                Cost &#8377;{obj.cost_for_one} for one
                            </span>{" "}
                            <br />
                            <span>Min &#8377;{obj.min}</span> <br />
                            <span>Accepts {obj.payment.join(", ")}</span>
                        </div>
                    </div>
                </div>
                <div className="card-rating cflex">
                    <div style={{ backgroundColor: color }}>{obj.rating}</div>
                    <span className="fs12">{obj.votes} votes</span>
                    <span className="fs12">{obj.reviews} reviews</span>
                </div>
            </div>
            <div className="card-part-2 rflex">
                <div className="order-online rflex">
                    <span>Order Online &#707;</span>
                </div>
            </div>
        </div>
    );
}
