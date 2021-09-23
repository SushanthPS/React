import { useParams } from "react-router-dom";

export default function UserDetails() {
    const param = useParams();
    return <div>Hello User {param.id}</div>;
}
