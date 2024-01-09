import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const buttonValue = e.target.name;
    if (result === "0" || result === "Error" || result === "Infinity") {
      setResult(buttonValue);
    } else {
      setResult(result.concat(buttonValue));
    }
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const equals = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const renderButtons = (buttons) => {
    return buttons.map((button) => (
      <button
        key={button}
        onClick={
          button === "AC"
            ? clear
            : button === "DEL"
            ? backspace
            : button === "="
            ? equals
            : handleClick
        }
        className={`${
          button === "0" || button === "="
            ? "col-span-1"
            : button === "AC" || button === "DEL"
            ? "col-span-2"
            : "col-span-1"
        } p-4 border border-gray-300 rounded ${
          button === "=" ? "bg-gray-400 text-black" : "bg-gray-200"
        } hover:bg-gray-300 focus:outline-none`}
        name={button}
        id={button.toLowerCase()}
      >
        {button === "DEL" ? "DEL" : button}
      </button>
    ));
  };

  return (
    <div className="container mx-auto my-8 max-w-md bg-gray-200 p-8 rounded-md shadow-md">
      <form>
        <input
          className="w-full border p-4 mb-4 text-2xl font-bold text-right bg-white rounded-md"
          type="text"
          value={result}
          readOnly
        />
      </form>
      <div className="grid grid-cols-4 gap-4">
        {renderButtons([
          "AC",
          "DEL",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
        ])}
      </div>
    </div>
  );
};

export default App;
