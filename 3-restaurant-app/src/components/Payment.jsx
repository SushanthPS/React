export default function Payment({ date, h1, h2, text, logo, color }) {
    console.log(color);
    return (
        <div className="row-flex" style={{ backgroundColor: color }}>
            <div className="column-flex">
                <p className="paymentText">{date}</p>
                <div className="black-box">Case Study</div>
                <h1>
                    {h1} <br /> {h2}
                </h1>
                <p className="paymentText">{text}</p>
            </div>
            <div className="column-flex">
                <img className="paymentImage" src={logo} alt="" />
                <span class="arrow">&#8594;</span>
            </div>
        </div>
    );
}
