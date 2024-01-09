import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const operators = ["/", "*", "+", "-"];
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const specialButtons = ["AC", "DEL", ".", "="];

  const renderButtons = (buttons) => {
    return buttons.map((button) => (
      <button
        key={button}
        onClick={
          button === "AC" ? clear : button === "DEL" ? backspace : button === "=" ? equals : handleClick
        }
        className={`${
          button === "AC" || button === "DEL" || button === "="
            ? "col-span-2"
            : "bg-gray-200"
        } p-2 ${operators.includes(button) ? "bg-gray-300" : ""} ${
          button === "=" ? "bg-blue-500 text-white" : ""
        }`}
        name={button}
        id={button.toLowerCase()}
      >
        {button === "DEL" ? "DEL" : button}
      </button>
    ));
  };

  const equals = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container mx-auto my-8 max-w-md">
        <form>
          <input
            className="w-full border p-2 mb-4"
            type="text"
            value={result}
            readOnly
          />
        </form>
        <div className="keypad grid grid-cols-4 gap-2">
          {renderButtons(specialButtons)}
          {renderButtons(numbers)}
          {renderButtons(operators)}
        </div>
      </div>
    </>
  );
};

export default App;
