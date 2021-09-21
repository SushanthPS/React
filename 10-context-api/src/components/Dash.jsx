import styled from "styled-components";
import User from "./User";
import { useContext } from "react/cjs/react.development";
import { ThemeContext } from "../contexts/ThemeContext";
import Toggle from "./Toggle";

const Wrapper = styled.div`
    height: 100vh;
    background-color: ${(props) => (props.toggle ? "#1f2327" : "#F5F6FA")};

    .theme {
        color: ${(props) => (props.toggle ? "white" : "black")};
    }
`;

const Header = styled.div`
    position: absolute;
    width: 30%;
    margin-left: 130px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    h1 {
        text-align: left;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 35px;
    }
`;

const Body = styled.div`
    position: absolute;
    height: 490px;
    width: 450px;
    top: 100px;
    left: 130px;
    background-color: ${(props) => (props.toggle ? "#292e33" : "white")};
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .active-users {
        display: flex;
        padding: 30px;
        font-weight: 500;
        margin-top: -10px;
        margin-bottom: 10px;
    }

    .active-users > div:nth-last-of-type(2) {
        font-size: 20px;
        margin-right: 170px;
    }

    .active-users > div:nth-last-of-type(1) {
        font-size: 15px;
    }
    .gray-text {
        color: #697d92;
    }

    .line {
        border: none;
        background-color: #545f69;
        width: 100%;
        height: 1px;
    }
`;

export default function Dash() {
    const { toggle } = useContext(ThemeContext);

    return (
        <Wrapper toggle={toggle}>
            <Header>
                <h1 className="theme">My Dashboard</h1>
                <Toggle></Toggle>
            </Header>
            <Body toggle={toggle}>
                <div className="active-users">
                    <div className="theme">Active Users</div>
                    <div className="theme">
                        <span className="gray-text"> for</span> August 2019
                    </div>
                </div>
                <div className="all-users">
                    <User
                        name={"Nrupul Dev"}
                        place={"Copenhagen, Denmark"}
                        points={4732}
                        level={15}
                        url={
                            "https://www.businesstyc.com/wp-content/uploads/2019/03/avataaars-2.png"
                        }
                    ></User>
                    <div className="line"></div>
                    <User
                        name={"Sandhya"}
                        place={"Copenhagen, Denmark"}
                        points={2339}
                        level={11}
                        url={
                            "https://iconape.com/wp-content/png_logo_vector/avatar-11.png"
                        }
                    ></User>
                    <div className="line"></div>
                    <User
                        name={"Elon Tusk"}
                        place={"California, USA"}
                        points={1884}
                        level={6}
                        url={
                            "https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png"
                        }
                    ></User>
                </div>
            </Body>
        </Wrapper>
    );
}
