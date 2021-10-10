import styled from "styled-components";
import { Link } from "react-router-dom";

const Cover = styled.div`
    border: 1px solid black;
    width: 200px;
    padding: 10px;

    img {
        width: 80%;
    }

    .title {
        font-weight: bold;
        font-size: 20px;
    }
`;

export default function Book(el) {
    return (
        <Cover>
            <img src={el.image} alt="" />
            <div className="title">{el.title}</div>
            <div className="rating">★{el.rating}</div>
            <Link
                style={{ color: "red", textDecoration: "underline" }}
                to={`/author/${el.id}`}
            >
                {" "}
                <div className="author">{el.author}</div>{" "}
            </Link>
        </Cover>
    );
}
