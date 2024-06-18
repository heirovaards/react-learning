import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Summoning the spell and giving the box an initial secret of 0

  return (
    <>
      <div>
        <p>Count: {count}</p>
        {/* Magic button to update the box */}
        <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
        <p>Reset</p>
        {/* Magic button to update the box */}
        <button onClick={() => setCount(count == 0)}>Reset</button>{" "}
      </div>
    </>
  );
}

export default Counter;
