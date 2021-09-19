export default function Navbar({ children }) {
    return (
        <div
            style={{
                width: "100vw",
                height: "54px",
                background: "#316B83",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            {children}
        </div>
    );
}
