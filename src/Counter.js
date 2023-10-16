import styles from "./Counter.module.css"
import {useState} from "react"
export default function Counter() {
    const [number, setNumber] = useState(0)
    function plusOne() {
        setNumber(number + 1)
    }
    function minusOne() {
        setNumber(number - 1)
    }
    return (
        <div className={styles.main}>
            <button className={styles.button} onClick={plusOne}>+1</button>
            <button className={styles.button} onClick={minusOne}>-1</button>
            <h2 className={styles.h2}>{number}</h2>
        </div>
    );
}