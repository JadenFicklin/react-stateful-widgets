/*
COUNTER Instructions

Watch this short video carefully, paying attention to the UI and Chrome Devtools:
https://tk-assets.lambdaschool.com/59036a85-0980-42c8-81ad-9afc8354497f_counter-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

A naive developer might say 3 different slices:
  - The count
  - Whether the text is color crimson or royalblue
  - Whether the text reads "even" or "odd"

But a single slice of state is all that's needed here: the count!
The other things can simply be _derived_ from the count itself.

*/

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const style = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: count % 2 === 0 ? "royalblue" : "crimson",
  };

  return (
    <div className="widget-counter container">
      <h2>Counter</h2>
      <div id="count" style={style}>
        Number {count} is {count % 2 === 0 ? "even" : "odd"} {}
      </div>
      <div>
        <button id="increment" onClick={increment}>
          Increment
        </button>
        <button id="decrement" onClick={decrement}>
          Decrement
        </button>
        <button id="resetCount" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}
