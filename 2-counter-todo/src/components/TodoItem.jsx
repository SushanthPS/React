export default function TodoItem({ ele, toggleStatus }) {
    return (
        <>
            {" "}
            <div className="listItem flex-row">
                {ele.title}{" "}
                {ele.status ? <span className="check"></span> : <span>❌</span>}
            </div>
            <button className="buttonC" onClick={() => toggleStatus(ele)}>
                &#10003;
            </button>{" "}
        </>
    );
}
