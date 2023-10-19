import styles from "./Counter.module.css"
import {useState} from "react"
export default function Counter() {
    const [number, setNumber] = useState(0)
    const [multiplier, setMultiplier] = useState(1)
    function plusOne() {
        setNumber(number + 1)
    }
    function minusOne() {
        setNumber(number - 1)
    }
    function multiply() {
        setNumber(number * multiplier)
    }
    function handleChange(event) {
        setMultiplier(event.target.value)
    }
    return (
        <div className={styles.main}>
            <button className={`${styles.button} ${styles.add}`} onClick={plusOne}>+</button>
            <h2 className={styles.h2}>{number}</h2>
            <button className={`${styles.button} ${styles.remove}`} onClick={minusOne}>-</button>
            <input className={styles.input} type="number" value={multiplier} onChange={handleChange}></input>
            <button className={`${styles.button} ${styles.multiply}`} onClick={multiply}>*</button>
        </div>
    );
}