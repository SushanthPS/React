import styled from "styled-components";

const Wrapper = styled.div`
    width: 300px;
    height: 180px;
    position: relative;
    background-color: #f6425b;
    left: 41%;
    top: 60px;
    border-radius: 15px;
`;

export default function Card({ name, month, year, number, cvc }) {
    return (
        <Wrapper>
            <div className="visa">
                <img
                    src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Image.png"
                    alt=""
                />
            </div>
            <div className="chip">
                <img
                    src="https://www.provendatarecovery.com/wp-content/uploads/2015/06/What-is-EMV-credit-card-technology.png"
                    alt=""
                />
            </div>
            <div className="number">{number}</div>
            <div className="first">
                <div className="white1">CARD HOLDER</div>
                <div className="white2">{name}</div>
            </div>
            <div className="second">
                <div className="white1">EXPIRES</div>
                <div className="white2">
                    {month}/{year ? year.slice(2) : year}
                </div>
            </div>
            <div className="third">
                <div className="white1">CVC</div>
                <div className="white2">{cvc}</div>
            </div>
        </Wrapper>
    );
}
