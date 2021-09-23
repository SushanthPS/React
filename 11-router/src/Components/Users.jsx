import { Link } from "react-router-dom";

export default function Users() {
    return (
        <div>
            <ul style={{ display: "inline-block" }}>
                {[1, 2, 3, 4].map((e) => (
                    <li key={e}>
                        <Link to={`/users/${e}`}>User {e}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
