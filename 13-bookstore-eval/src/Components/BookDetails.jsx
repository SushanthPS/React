import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Book = styled.div`
    margin-top: 50px;
`;

export default function BookDetails() {
    const [data, setData] = useState({});
    const { id } = useParams();

    const getBook = async () => {
        const res = await axios.get("http://localhost:3001/books", {
            params: {
                id: id,
            },
        });
        setData(res.data[0]);
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <Book className>
            <img src={data.image} alt="" />
            <h1 className="title">Name: {data.title}</h1>
            <h3 className="rating">Rating: ★{data.rating}</h3>
            <Link style={{ color: "red" }} to={`/author/${data.id}`}>
                {" "}
                <h3 className="author">Author: {data.author}</h3>{" "}
            </Link>
            <h3>Release Data: {data.release_date}</h3>
            <h3>Genre: {data.genre}</h3>
            <h3>Reviews: {data.reviews}</h3>
            <p>Extra: {data.extra}</p>
        </Book>
    );
}
