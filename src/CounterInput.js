import styles from "./CounterInput.module.css"
export default function CounterButton(props) {
    return (
        <input className={styles.input} type="number" onChange={props.onChange} value={props.value}></input>
    )
}