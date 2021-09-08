function TodosItems({ title, status }) {
    return (
        <div>
            {title} = {status ? "Done" : "Not Done"}
        </div>
    );
}

export { TodosItems };
