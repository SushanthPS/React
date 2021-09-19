export default function NavbarItem({ label }) {
    return (
        <div
            style={{
                color: "white",
                padding: "10px",
                fontSize: "20px",
                fontWeight: "700",
                letterSpacing: "1px",
                marginRight: "50px",
            }}
        >
            {label}
        </div>
    );
}
