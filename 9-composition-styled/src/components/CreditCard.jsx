import { useState } from "react";
import Form from "./Form";
import Card from "./Card";

export default function CreditCard() {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div>
            <Form handleChange={handleChange}></Form>
            <Card
                name={data.name}
                number={data.number}
                month={data.month}
                year={data.year}
                cvc={data.cvc}
            ></Card>
        </div>
    );
}
