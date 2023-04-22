import React from "react";
import { connect } from "react-redux";
import { addNumber, addOperator, clear } from "../actions/Action";
import styles from "./ButtonStyle";

function Buttons(props) {
  const { displayValue, addNumber, addOperator, clear } = props;
  return (
    <div style={styles.wrapper}>
      <h1>Simple Calculator App</h1>
      <input style={styles.input} type="text" value={displayValue} disabled />
      <br />
      <button style={styles.btns} onClick={() => clear()}>
        C
      </button>
      <button style={styles.btns} onClick={() => addNumber(7)}>
        7
      </button>
      <button style={styles.btns} onClick={() => addNumber(8)}>
        8
      </button>
      <button style={styles.btns} onClick={() => addNumber(9)}>
        9
      </button>
      <button style={styles.btns} onClick={() => addOperator("*")}>
        x
      </button>
      <br />
      <button style={styles.btns} onClick={() => addNumber(4)}>
        4
      </button>
      <button style={styles.btns} onClick={() => addNumber(5)}>
        5
      </button>
      <button style={styles.btns} onClick={() => addNumber(6)}>
        6
      </button>
      <button style={styles.btns} onClick={() => addOperator("-")}>
        -
      </button>
      <br />
      <button style={styles.btns} onClick={() => addNumber(1)}>
        1
      </button>
      <button style={styles.btns} onClick={() => addNumber(2)}>
        2
      </button>
      <button style={styles.btns} onClick={() => addNumber(3)}>
        3
      </button>
      <button style={styles.btns} onClick={() => addOperator("+")}>
        +
      </button>
      <br />
      <button style={styles.btns} onClick={() => addNumber(0)}>
        0
      </button>
      <button style={styles.btns} onClick={() => addNumber(".")}>
        .
      </button>
      <button style={styles.btns} onClick={() => addOperator("")}>
        =
      </button>
      <button style={styles.btns} onClick={() => addOperator("/")}>
        /
      </button>
      <br />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    displayValue: state.displayValue,
  };
}

const mapDispatchToProps = {
  addNumber,
  addOperator,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
