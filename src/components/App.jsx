import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [decimal, setDecimal] = useState();
  const [binary, setBinary] = useState();
  const [hexadecimal, setHexadecimal] = useState();
  const [type, setType] = useState();
  const [binaryStr, setBinaryStr] = useState();
  const [hexaStr, setHexaStr] = useState();
  const [decimalNum, setDecimalNum] = useState();
  const [decimalNumber, setDecimalNumber] = useState();
  function handleInput(event) {
    setDecimal(event.target.value);
    setType("");
    setBinary("");
    setHexadecimal("");
  }

  function handleRadio(event) {
    const { value } = event.target;
    setType(value);
  }

  function convertDtoBH() {
    if (type === "binary") {
      let binStr = Number(decimal).toString(2);
      setBinary(binStr);
    } else if (type === "hexadecimal") {
      let hexStr = Number(decimal).toString(16).toUpperCase();
      setHexadecimal(hexStr);
    }
  }

  function handleInputBinary(event) {
    setBinaryStr(event.target.value);

    setDecimalNum("");
  }
  function handleInputHexa(event) {
    setHexaStr(event.target.value);

    setDecimalNumber("");
  }

  function convertBtoD() {
    setDecimalNum(parseInt(binaryStr, 2));
  }

  function convertHtoD() {
    setDecimalNumber(parseInt(hexaStr, 16));
  }
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Decimal to Binary / Hexadecimal :</h2>
        <input type="number" placeholder="Decimal" onChange={handleInput} />
        <div className="radio" onChange={handleRadio}>
          <span>
            <input
              type="radio"
              name="convertDecimalTo"
              value="binary"
              checked={type === "binary"}
            />
            Binary
          </span>
          <span>
            <input
              type="radio"
              name="convertDecimalTo"
              value="hexadecimal"
              checked={type === "hexadecimal"}
            />
            Hexadecimal
          </span>

          <button className="firstButton" onClick={convertDtoBH}>
            convert
          </button>
        </div>

        <h1>
          {type === "binary" && binary}
          {type === "hexadecimal" && hexadecimal}
        </h1>
        <hr className="hr" />
        <h2>Binary to Decimal :</h2>

        <input
          type="text"
          name="binary"
          placeholder="Binary"
          onChange={handleInputBinary}
        />
        <button onClick={convertBtoD}>convert</button>
        <h1>{decimalNum}</h1>
        <h2>Hexadecimal to Decimal :</h2>
        <input
          type="text"
          name="hexa"
          placeholder="Hexadecimal"
          onChange={handleInputHexa}
        />
        <button onClick={convertHtoD}>convert</button>
        <h1>{decimalNumber}</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
