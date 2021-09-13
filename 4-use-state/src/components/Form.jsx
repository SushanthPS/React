import { useState } from "react";

const initState = { username: "", age: "" };

export default function Form() {
    const [formData, setFormData] = useState(initState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="username"
                    placeholder="Enter name"
                />
                <input
                    onChange={handleChange}
                    type="number"
                    name="age"
                    placeholder="Enter age"
                />
                <input type="submit" name="submit" />
            </form>
        </div>
    );
}
