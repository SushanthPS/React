import Listitem from "./Listitem";

export default function box(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <Listitem name={props.item1}></Listitem>
            <Listitem name={props.item2}></Listitem>
            <Listitem name={props.item3}></Listitem>
            <Listitem name={props.item4}></Listitem>
        </div>
    );
}
