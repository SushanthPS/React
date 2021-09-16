import { useRef, useState } from "react";

const initState = {
    username: "",
    age: "",
};
export default function Form() {
    const [formData, setFormData] = useState(initState);
    const uploadRef = useRef();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                name="age"
                placeholder="age"
                onChange={handleChange}
            />
            <br />
            Married
            <input type="checkbox" onChange={handleChange} name="isMarried" />
            <br />
            <select name="country" onChange={handleChange}>
                <option value=""></option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
            </select>
            <br />
            <input
                ref={uploadRef}
                onChange={handleChange}
                type="file"
                name="pancard"
            />
            <br />
            <input type="submit" />
        </form>
    );
}
