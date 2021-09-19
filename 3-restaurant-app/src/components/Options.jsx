export default function Options({ setRating, setPay, setSort }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "Rating") setRating(Number(value));
        else if (name === "Sorting") setSort(value);
        else if (name === "Payment") setPay(value);
    };
    return (
        <form>
            <div>
                <label>
                    {" "}
                    Rating
                    <select name="Rating" onChange={handleChange}>
                        <option value="1">1★ above</option>
                        <option value="2">2★ above</option>
                        <option value="3">3★ above</option>
                        <option value="4">4★ above</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Sorting
                    <select name="Sorting" onChange={handleChange}>
                        <option value="default">Relevance</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Payment
                    <select name="Payment" onChange={handleChange}>
                        <option value="default">Default</option>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                        <option value="UPI">UPI</option>
                    </select>
                </label>
            </div>
        </form>
    );
}
