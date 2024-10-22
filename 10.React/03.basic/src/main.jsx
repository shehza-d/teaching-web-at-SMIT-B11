import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// JSX

const sum = 5 + 3;
const testing = <span>kabeer</span>;

// Component
// function App() {
//   console.log(sum);

//   return <h1>Shehzad Iqbal {sum}</h1>;
// }

function App() {
  const imageLink = "https://i.imgur.com/yXOvdOSs.jpg";
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src={imageLink}
        alt="Hedy Lamarr"
        className="imageLink"
        id="my-id"
        width={100 + 100}
      />
      <ul>
        <li>
          Invent new <br /> traffic lights
        </li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
