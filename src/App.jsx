import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [count, setcount] = useState();
  return (
    <>
      <center>
        <h1 className="bg-green-400 text-black rounded-md space-x-7 ">
          Tailwind Test
        </h1>
        <Card username="aktech" btntext="click me" />
        <Card  username="Aktechnology"   btntext="visit me" />
      </center>
    </>
  );
};

export default App;
