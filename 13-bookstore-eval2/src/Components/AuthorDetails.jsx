import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Author = styled.div`
    display: inline-block;
    margin-top: 50px;
    border: 2px solid greenyellow;
    padding: 50px 100px 50px 100px;
`;

export default function AuthorDetails() {
    const [data, setData] = useState({});
    const [books, setBooks] = useState([]);
    const { id } = useParams();

    const getBook = async () => {
        const res = await axios.get("http://localhost:3001/books", {
            params: {
                id: id,
            },
        });
        setData(res.data[0]);
    };

    const getAllBooks = async () => {
        const res = await axios.get("http://localhost:3001/books");
        setBooks(res.data);
    };

    useEffect(() => {
        getBook();
        getAllBooks();
    }, []);

    return (
        <Author>
            <img src={data.photo} alt="" />
            <h1>{data.author}</h1>
            <h3>Age: {data.age}</h3>
            <h3>Books: </h3>
            {books
                .filter((el) => el.author === data.author)
                .map((el) => (
                    <li>{el.title}</li>
                ))}
        </Author>
    );
}
