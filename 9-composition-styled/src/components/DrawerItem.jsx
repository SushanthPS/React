import styled from "styled-components";
export default function DrawerItem({ label, icon }) {
    const Item = styled.div`
        font-size: 20px;
        text-align: left;
        color: gray;
        padding: 10px;
        img {
            max-width: 25px;
            margin-right: 20px;
            margin-left: 20px;
        }
    `;
    return (
        <Item>
            <img src={icon} alt="" />

            {label}
        </Item>
    );
}
