"use client";

import { useState, useCallback } from "react";
import { evaluate } from "mathjs";
import styles from "./calculator.module.css";

export default function Calculator() {

    const [currentEquation, setCurrentEquation] = useState('');

    const handleButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        setCurrentEquation(currentEquation + value);
    }, [currentEquation]);

    const handleSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = evaluate(currentEquation);
        setCurrentEquation(result);
    }, [currentEquation]);

    return (
        <div className={styles.calculator}>
          <form name="calculator">
            <div className={styles.display}>{currentEquation}</div>
            <div className={styles.keypad}>
              <div>
                <button value={7} onClick={handleButtonClick}>7</button>
                <button value={8} onClick={handleButtonClick}>8</button>
                <button value={9} onClick={handleButtonClick}>9</button>
                <button value="+" onClick={handleButtonClick}>+</button>
              </div>
              <div>
                <button value={4} onClick={handleButtonClick}>4</button>
                <button value={5} onClick={handleButtonClick}>5</button>
                <button value={6} onClick={handleButtonClick}>6</button>
                <button value="-" onClick={handleButtonClick}>-</button>
              </div>
              <div>
                <button value={1} onClick={handleButtonClick}>1</button>
                <button value={2} onClick={handleButtonClick}>2</button>
                <button value={3} onClick={handleButtonClick}>3</button>
                <button value="*" onClick={handleButtonClick}>*</button>
              </div>
              <div>
                <button value={0} onClick={handleButtonClick}>0</button>
                <button value="." onClick={handleButtonClick}>.</button>
                <button value="=" onClick={handleSubmit}>=</button>
                <button value="/" onClick={handleButtonClick}>/</button>
              </div>
            </div>
          </form>
        </div>
      )
}