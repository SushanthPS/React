export default function NavbarItem({ label, fontSize }) {
    return (
        <div
            style={{
                color: "white",
                padding: "10px",
                fontSize: fontSize ? fontSize : "15px",
                fontWeight: "700",
                letterSpacing: "1px",
                marginRight: "50px",
                marginTop: "7px",
            }}
        >
            {label}
        </div>
    );
}
