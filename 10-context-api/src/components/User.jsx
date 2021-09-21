import styled from "styled-components";

const Wrapper = styled.div`
    height: 130px;
    position: relative;
    font-weight: 500;

    p {
        font-size: 14px;
    }

    .bold {
        font-weight: 700;
    }

    .theme {
        color: white;
    }

    .gray-text {
        color: #697d92;
    }

    img {
        width: 10%;
        position: absolute;
        left: 28px;
        top: 13px;
    }

    .name {
        position: absolute;
        left: 80px;
        top: 5px;
    }

    .place {
        position: absolute;
        left: 80px;
        top: 25px;
    }

    .level {
        position: absolute;
        left: 28px;
        top: 70px;
    }

    .points {
        position: absolute;
        top: 70px;
        left: 350px;
    }
`;

export default function User({ name, place, level, points, url }) {
    return (
        <Wrapper>
            <div>
                <img src={url} alt="" />
                <div>
                    <p className="name theme">{name}</p>
                    <p className="place gray-text">{place}</p>
                </div>
            </div>
            <div>
                <p className="level theme">Professional Level {level}</p>
                <p className="points theme bold">{points} Points</p>
            </div>
        </Wrapper>
    );
}
