import styled from "styled-components";
const Cflex = styled.div`
    display: flex;
    flex-direction: column;
`;

const Rflex = styled.div`
    display: flex;
`;

export default function Form({ handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <Cflex>
                <input type="text" name="name" onChange={handleChange} />
                <label>CARDHOLDER NAME</label>
                <span class="material-icons abc">person_outline</span>
            </Cflex>
            <Cflex>
                <input type="text" name="number" onChange={handleChange} />
                <label>CARD NUMBER</label>
                <span class="material-icons abc">credit_card</span>
            </Cflex>
            <Rflex>
                <Cflex>
                    <input
                        className="small"
                        type="text"
                        name="month"
                        onChange={handleChange}
                    />
                    <label>EXPIRY MONTH</label>
                    <span class="material-icons abc">date_range</span>
                </Cflex>
                <Cflex>
                    <input
                        className="small"
                        type="text"
                        name="year"
                        onChange={handleChange}
                    />
                    <label>EXPIRY YEAR</label>
                    <span class="material-icons abc">date_range</span>
                </Cflex>
                <Cflex>
                    <input
                        className="small"
                        type="text"
                        name="cvc"
                        onChange={handleChange}
                    />
                    <label>CVC</label>
                    <span class="material-icons abc">lock</span>
                </Cflex>
            </Rflex>
            <div className="payment">
                Payment amount: <span>12300 Rs</span>
            </div>
            <Cflex>
                <input type="submit" value="Pay" />
            </Cflex>
        </form>
    );
}
