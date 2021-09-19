export default function Input({ handleChange, handleSubmit }) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                name="salary"
                placeholder="Salary"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="image"
                placeholder="Photo URL"
                onChange={handleChange}
            />
            <br />
            <select
                name="department"
                placeholder="helo"
                onChange={handleChange}
            >
                <option value="" disabled selected>
                    Department
                </option>
                <option value="cs">CS</option>
                <option value="ec">EC</option>
                <option value="mech">Mech</option>
            </select>
            <br />
            Married
            <input type="checkbox" onChange={handleChange} name="isMarried" />
            <br />
            <input type="submit" />
            <br />
        </form>
    );
}
