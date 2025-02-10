

import { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const intervalRef = useRef(null);

 

  function qosh() {
    if (!intervalRef.current && inputValue !== "" && Number(inputValue) >= 0) {
      setCount(Number(inputValue)); 
      setInputValue("");
      intervalRef.current = setInterval(() => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
  }

  function toxtat() {
    clearInterval(intervalRef.current );
    intervalRef.current = null;
  }

  function nol() {
    toxtat(); 
    setCount(0);
  }

  return (
    <div className="flex m-auto flex-col w-[400px] items-center p-4 border rounded-lg shadow-lg ">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mb-2 p-2 border rounded-lg"
      />
      <h1 className="text-2xl font-bold mb-2">{count} s</h1>
      <div className="flex gap-2">
        <button
          onClick={qosh}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Boshlash
        </button>
        <button
          onClick={toxtat}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          To'xtatish
        </button>
        <button
          onClick={nol}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Nolga qaytarish
        </button>
      </div>
    </div>
  );
};

export default App;
