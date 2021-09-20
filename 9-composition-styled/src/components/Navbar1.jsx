import styled from "styled-components";

const Wrapper = styled.header`
    height: 80px;
    background-color: black;
    position: relative;
`;

const Logo = styled.div`
    position: absolute;
    top: 10px;
    left: 40px;

    @media all and (max-width: 800px) {
        display: none;
    }
`;

const Links = styled.div`
    font-size: 25px;
    text-align: right;
    padding-top: 20px;
    margin-right: 20px;

    @media all and (max-width: 800px) {
        font-size: 15px;
    }
`;

const Button = styled.button`
    cursor: pointer;
    color: white;
    background-color: #00adad;
    padding: 10px 20px;
    border: none;
    font-weight: 700;
    border-radius: 2px;
    font-size: 20px;

    @media all and (max-width: 800px) {
        font-size: 15px;
    }
`;

const A = styled.a`
    text-decoration: none;
    color: white;
    cursor: pointer;
    margin-left: 50px;
`;

export default function Navbar1() {
    return (
        <Wrapper>
            <Logo>
                <img
                    height="60px"
                    src="https://assets.turbologo.com/blog/en/2019/05/19085141/good-logo.png"
                    alt=""
                />
            </Logo>
            <Links>
                <Button>Try Now</Button>
                <A>Learn</A>
                <A>Resources</A>
                <A>About</A>
            </Links>
        </Wrapper>
    );
}
