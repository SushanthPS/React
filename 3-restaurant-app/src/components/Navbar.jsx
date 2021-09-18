import { useState } from "react";
import Form from "./Form";

export default function Navbar() {
    const [form, setForm] = useState(false);
    return (
        <div className="navbar-cover">
            <div className="navbar rflex">
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
                        alt=""
                    />
                </div>
                <div>
                    <button onClick={() => setForm(true)}>
                        Add Restaurant
                    </button>
                </div>
            </div>
            <Form form={form}></Form>
        </div>
    );
}
