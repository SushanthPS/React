export default function Options({ setSort, setFilter, setOrder }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "Filter") setFilter(Number(value));
        else if (name === "Sorting") {
            if (value === "ascTitle") {
                setSort("title");
                setOrder("asc");
            } else if (value === "dscTitle") {
                setSort("title");
                setOrder("desc");
            } else if (value === "ascRating") {
                setSort("rating");
                setOrder("asc");
            } else if (value === "dscRating") {
                setSort("rating");
                setOrder("desc");
            }
        }
    };

    return (
        <form>
            <label style={{ marginRight: "70px" }}>
                Sorting{" "}
                <select name="Sorting" onChange={handleChange}>
                    <option value="ascTitle">Book Name asc</option>
                    <option value="dscTitle">Book Name dsc</option>
                    <option value="ascRating">Rating asc</option>
                    <option value="dscRating">Rating dsc</option>
                </select>
            </label>
            <label>
                Rating Filter{" "}
                <select name="Filter" onChange={handleChange}>
                    <option value="0">All Books</option>
                    <option value="2">2★ above</option>
                    <option value="5">5★ above</option>
                    <option value="8">8★ above</option>
                </select>
            </label>
        </form>
    );
}
