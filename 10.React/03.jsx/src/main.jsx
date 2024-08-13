import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Test() {
  const myName = "shehzad";

  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
        id="my-id"
      />
    </>
  );
}


// 1. all tags should be closed
// 2. class nhi className
// 3. parent ak hona chiye return element/ Return a single root element

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Test />
  </StrictMode>
);
