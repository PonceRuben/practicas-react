import { useState } from "react";
import "./App.css";
const item = {
  done: true,
  label: "Sacar the trash",
};
const App = () => {
  const [inputValue, setInputValue] = useState();
  const [list, setList] = useState([]);

  const changeStatus = (label) => {
    setList((prev) => {
      return prev.map((item) => {
        if (item.label === label) {
          return { ...item, done: !item.done };
        } else return item;
      });
    });
  };

  return (
    <>
      <div className={"bobo"}>
        <h3>Listado</h3>
      </div>
      <div>
        <input
          className="input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              setList((prev) => [...prev, { done: false, label: inputValue }]);
              setInputValue("");
            }
          }}
        />
      </div>
      <div className="list">
        <div className="done">
          <p>Done</p>
          {list
            .filter((item) => item.done)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="item done-item"
                  onClick={(e) => {
                    changeStatus(item.label);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
        </div>
        <div className="notdone">
          <p>Not Done</p>
          {list
            .filter((item) => !item.done)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="item notdone-item"
                  onClick={(e) => {
                    changeStatus(item.label);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default App;

const arr = [1, 2, 3, 4];
arr.map((item, index) => item * index);

arr.filter((item) => !item % 2);
