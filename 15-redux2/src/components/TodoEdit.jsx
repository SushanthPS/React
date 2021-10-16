import { useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div``;

export default function TodoEdit() {
    const { id } = useParams();
    console.log(id);
    return <Container></Container>;
}
