import styles from "./CounterButton.module.css"
export default function CounterButton(props) {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.text}</button>
    )
}