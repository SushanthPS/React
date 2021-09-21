import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const InputWrapper = styled.label`
    position: relative;
    top: -60px;
    left: 400px;
`;
const Input = styled.input`
    position: absolute;
    left: -9999px;
    top: -9999px;

    &:checked + span {
        background-color: #1890ff;

        &:before {
            left: 27px;
        }
    }
`;

const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background-color: #bfbfbf;
    position: relative;
    transition: background-color 0.2s;

    &:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 21px;
        height: 21px;
        border-radius: 45px;
        transition: 0.2s;
        background: #fff;
    }
`;

export default function Toggle() {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <InputWrapper>
            <Input type="checkbox" onChange={changeTheme} />
            <Slider />
        </InputWrapper>
    );
}
