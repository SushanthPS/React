import { useState } from "react";

export default function Form({ form, setForm, arr, setArr }) {
    const [data, setData] = useState({ payment: [] });
    const [id, setId] = useState(21);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            let temp = data.payment;
            if (checked) {
                temp.push(value);
                setData({ ...data, [name]: temp });
            } else {
                let index = temp.indexOf(value);
                temp.splice(index, 1);
                setData({ ...data, [name]: temp });
            }
        } else if (name === "categories") {
            let temp = value.split(" ");
            setData({ ...data, [name]: temp });
        } else setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ ...data, id: id });
        setId(id + 1);
        setArr([...arr, data]);
        alert("Restaurant added successfuly");
        setData({ ...data, payment: [] });
        setForm(false);
    };

    return form ? (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="rflex">
                    <div>
                        <div>
                            <label>Name</label> <br />
                            <input
                                onChange={handleChange}
                                type="text"
                                placeholder="Restaurant Name"
                                name="restaurantName"
                            />
                        </div>
                        <div>
                            <label>Image Link</label> <br />
                            <input
                                onChange={handleChange}
                                type="text"
                                placeholder="Image Link"
                                name="image"
                            />
                        </div>
                        <div>
                            <label>Categories</label> <br />
                            <input
                                onChange={handleChange}
                                type="text"
                                placeholder="Categories"
                                name="categories"
                            />
                        </div>
                        <div>
                            <label>Cost for One</label> <br />
                            <input
                                onChange={handleChange}
                                type="number"
                                placeholder="Cost for One"
                                name="cost_for_one"
                            />
                        </div>
                        <div>
                            <label>Cost for Two</label> <br />
                            <input
                                onChange={handleChange}
                                type="number"
                                placeholder="Cost for Two"
                                name="cost_for_two"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Minimum Item Cost</label> <br />
                            <input
                                onChange={handleChange}
                                type="number"
                                placeholder="Minimum Item Cost"
                                name="min"
                            />
                        </div>
                        <div>
                            <label>Total Reviews</label> <br />
                            <input
                                onChange={handleChange}
                                type="number"
                                placeholder="Total Reviews"
                                name="reviews"
                            />
                        </div>
                        <div>
                            <label>Total Votes</label> <br />
                            <input
                                onChange={handleChange}
                                type="number"
                                placeholder="Total Votes"
                                name="votes"
                            />
                        </div>
                        <div>
                            <label>Rating</label> <br />
                            <input
                                onChange={handleChange}
                                type="number"
                                placeholder="Rating"
                                name="rating"
                                step=".01"
                            />
                        </div>
                        <div>
                            <label>Payment Methods</label> <br />
                            <label>
                                Cash
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="payment"
                                    value="Cash"
                                />
                            </label>
                            <label>
                                Card
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="payment"
                                    value="Card"
                                />
                            </label>
                            <label>
                                UPI
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="payment"
                                    value="UPI"
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <input className="submit" type="submit" />
            </form>
        </div>
    ) : (
        ""
    );
}
