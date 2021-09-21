import styled from "styled-components";
import { BsBarChart } from "react-icons/bs";
import { BiDirections, BiBasket } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { MdContentCopy } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react/cjs/react.development";

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 80px;
    justify-content: space-between;
    background-color: ${(props) => (props.toggle ? "#16191c" : "white")};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .profile-pic {
        flex-basis: 70px;
        margin-top: 30px;
    }

    .nav-icons {
        flex-basis: 350px;
        display: flex;
        flex-direction: column;
        font-size: 25px;
        justify-content: space-around;
        color: #545f69;
        align-items: center;
        margin-top: -50px;
    }

    .add-button {
        margin-bottom: 30px;
        flex-basis: 50px;
        background-color: #28cb97;
        width: 50px;
        border-radius: 50px;
        align-self: center;
        font-size: 31px;
        color: white;
    }

    .profile-pic > img {
        width: 60%;
    }

    .line {
        border: none;
        background-color: #545f69;
        width: 30%;
        height: 1px;
    }

    .selected {
        color: white;
        padding: 20px 40px 20px 40px;
        background-color: #5f93f4;
        border-radius: 5px;
    }
`;

export default function Navbar() {
    const { toggle } = useContext(ThemeContext);
    return (
        <Wrapper toggle={toggle}>
            <div className="profile-pic">
                <img
                    src="https://www.pngrepo.com/png/14840/512/user.png"
                    alt=""
                />
            </div>

            <div className="nav-icons">
                <BsBarChart className="selected"></BsBarChart>

                <BiDirections></BiDirections>
                <div className="line"></div>
                <BiBasket></BiBasket>
                <div className="line"></div>
                <TiMessages></TiMessages>
                <div className="line"></div>
                <MdContentCopy></MdContentCopy>
                <div className="line"></div>
                <IoSettingsOutline></IoSettingsOutline>
                <div className="line"></div>
            </div>
            <div className="add-button">+</div>
        </Wrapper>
    );
}
