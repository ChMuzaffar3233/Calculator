import { useState} from "react";

const App = () => {
  const[input, setInput] = useState("");

  //handleclick
  const handleClick = (value) => {
  setInput((prev) => prev + value);
  };

  //handleclear
  const handleClear = () => {
  setInput("");
  };

  //handleDelete
  const handleDelete = () => {
  setInput((prev) => prev.slice(0, -1));
  };

  //handlecalculate
  const handleCalculate = () => {
  try {
    // eslint-disable-next-line react-hooks/unsupported-syntax
    const result = eval(input);
    setInput(result.toString());
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    setInput("Error");
  }
  }; 
  

  return (
    <div className="calculator-container">
      <div className="container">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          <button className="btn control" onClick={handleClear}>
            C
            </button>
          <button className="btn control" onClick={handleDelete}>
            DEl
            </button>
          <button className="btn operator" onClick={() => handleClick("%")}>
            %
            </button>
          <button className="btn operator" onClick={() => handleClick("/")}>
          /
          </button>
          
          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="btn operator" onClick={() => handleClick("*")}>
            x
          </button>

          <button className="btn" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="btn operator" onClick={() => handleClick("-")}>
            -
          </button>

          <button className="btn" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="btn operator" onClick={() => handleClick("+")}>
            +
          </button>

          <button className="btn zero" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn equals" onClick={handleCalculate}>
            =
          </button>








        </div>
      </div>
    </div>
  )
 
}
export default App ;
