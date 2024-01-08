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
          <button
            onClick={clear}
            className="col-span-2 bg-gray-300 p-2"
            id="AC"
          >
            AC
          </button>
          <button
            onClick={backspace}
            className="bg-gray-300 p-2"
            id="backspace"
          >
            DEL
          </button>
          <button name="/" onClick={handleClick} className="bg-gray-300 p-2">
            &divide;
          </button>
          <button name="7" onClick={handleClick} className="bg-gray-200 p-2">
            7
          </button>
          <button name="8" onClick={handleClick} className="bg-gray-200 p-2">
            8
          </button>
          <button name="9" onClick={handleClick} className="bg-gray-200 p-2">
            9
          </button>
          <button name="*" onClick={handleClick} className="bg-gray-300 p-2">
            &times;
          </button>
          <button name="4" onClick={handleClick} className="bg-gray-200 p-2">
            4
          </button>
          <button name="5" onClick={handleClick} className="bg-gray-200 p-2">
            5
          </button>
          <button name="6" onClick={handleClick} className="bg-gray-200 p-2">
            6
          </button>
          <button name="+" onClick={handleClick} className="bg-gray-300 p-2">
            +
          </button>
          <button name="1" onClick={handleClick} className="bg-gray-200 p-2">
            1
          </button>
          <button name="2" onClick={handleClick} className="bg-gray-200 p-2">
            2
          </button>
          <button name="3" onClick={handleClick} className="bg-gray-200 p-2">
            3
          </button>
          <button name="-" onClick={handleClick} className="bg-gray-300 p-2">
            &ndash;
          </button>
          <button name="." onClick={handleClick} className="bg-gray-200 p-2">
            .
          </button>
          <button name="0" onClick={handleClick} className="bg-gray-200 p-2">
            0
          </button>
          <button
            onClick={equals}
            className="col-span-2 bg-blue-500 p-2 text-white"
            id="equals"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
