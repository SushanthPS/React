export default function TodoItem({ el, toggleStatus, handleDelete }) {
    return (
        <div
            className="items"
            key={el.id}
            style={{
                backgroundColor: el.status ? "#58CC99" : "white",
            }}
        >
            <span
                style={{
                    textDecoration: el.status ? "line-through" : "none",
                }}
            >
                {el.title}
            </span>

            {el.status ? (
                <span className="check"></span>
            ) : (
                <span className="spacing">❌</span>
            )}
            <button onClick={() => toggleStatus(el)} className="toggleButtons">
                Toggle
            </button>
            <button
                className="toggleButtons"
                onClick={() => {
                    handleDelete(el);
                }}
            >
                Delete
            </button>
        </div>
    );
}
