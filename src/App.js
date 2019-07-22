import React, { useState } from "react";
import { Testes, func } from "./App.spec"; // can be used to test our application

const App = () => {
  const [query, setQuery] = useState("");
  const [binaryToDecimal, setBinaryToDecimal] = useState();
  const [hasErrorDigit, setHasErrorDigit] = useState("");

  const binToDec = query => {
    let decimal = 0;
    const arrayBinario = query.split("");
    arrayBinario.reverse().forEach((char, index) => {
      decimal += parseInt(char) * Math.pow(2, index);
    });
    setBinaryToDecimal(decimal);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.match(/^[0-1]+$/g) === null) {
      setHasErrorDigit("Enter either 0 or 1");
      return;
    }
    setHasErrorDigit("");
    binToDec(query.toString());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={event => setQuery(event.target.value)}
          type="text"
          value={query}
          placeholder="Enter 8 binary digits..."
        />
        <button type="submit"> Click </button>
      </form>
      {hasErrorDigit ? "Only 0 and 1 is valid." : binaryToDecimal}
    </>
  );
};

export default App;
