import "./styles.css"
export default function CounterButton(props) {
    return (
        <button className="button" onClick={props.onClick}>{props.text}</button>
    )
}