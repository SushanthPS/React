import axios from "axios";
import { useState } from "react";

const reverse = (s) => {
    let temp = s.split("-");
    let x = temp[0];
    temp[0] = temp[2];
    temp[2] = x;
    return temp.join("-");
};

export default function Cowin() {
    const [text, setText] = useState("");
    const [date, setDate] = useState(null);
    const [data, setData] = useState([]);

    const handleSearch = async () => {
        let res = await axios.get(
            "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin",
            {
                params: {
                    pincode: text,
                    date: reverse(date),
                },
            }
        );
        setData(res.data.sessions);
    };

    return (
        <div>
            <h1>Cowin App</h1>
            <div>
                <input
                    type="number"
                    placeholder="Enter pincode"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <br />
                <input
                    type="date"
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                />{" "}
                <br />
                <button onClick={handleSearch}>Find</button>
                <div className="sessionData">
                    {data.map((el) => {
                        return (
                            <div className="sessions">
                                <div>
                                    {" "}
                                    <span className="highlight">
                                        Name:
                                    </span>{" "}
                                    {el.name}{" "}
                                </div>
                                <div>
                                    {" "}
                                    <span className="highlight">
                                        Address:
                                    </span>{" "}
                                    {el.address}{" "}
                                </div>
                                <div>
                                    {" "}
                                    <span className="highlight">
                                        Vaccine:
                                    </span>{" "}
                                    {el.vaccine}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
