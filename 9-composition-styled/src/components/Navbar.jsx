import styled from "styled-components";
import NavbarItem from "./NavbarItem";

export default function Navbar({ children }) {
    const SiteName = styled.div`
        margin-left: 40px;
        margin-top: -7px;
    `;
    return (
        <div
            style={{
                width: "100vw",
                height: "54px",
                background: "#4051B5",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <SiteName>
                <NavbarItem label="Masai School" fontSize={"20px"} />
            </SiteName>
            <div className="right" style={{ display: "flex" }}>
                <NavbarItem label="About" />
                <NavbarItem label="Prices" />
                <NavbarItem label="Start Page" />
                <NavbarItem label="Start Page" />
                <NavbarItem label="Start Page" />
            </div>
        </div>
    );
}
