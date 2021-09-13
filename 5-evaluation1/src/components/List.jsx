export default function List({ el }) {
    const handleAdd = (e) => {
        e.target.innerHTML = "Purchased";
        e.target.setAttribute("class", "purchased");
    };

    return (
        <div className="list">
            <p contentEditable={true}>{el}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
