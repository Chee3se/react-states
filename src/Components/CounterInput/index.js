import "./styles.css"
export default function CounterButton(props) {
    return (
        <input className="input" type="number" onChange={props.onChange} value={props.value}></input>
    )
}