import React from "react";

const Props = (props) => {
  const name = "John";
  const x = 10;
  const y = 30;
  const names = ["Cin", "Yudha", "Ferbi"];
  const loggedIn = false;
  const customSize = {
    color: "red",
    fontSize: "55px",
  };

  return (
    <div>
      Calling from props {!props.name ? "Error Empty" : props.name}
      <div className="text-5xl">App</div>
      <p style={customSize}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((names, index) => (
          <li key={index}>{names}</li>
        ))}
      </ul>
      <p>{loggedIn ? <h1>Hello Member</h1> : <h1>hello guest</h1>}</p>
      <p>{loggedIn && <h1>Hello Member</h1>}</p>
    </div>
  );
};

export default Props;
