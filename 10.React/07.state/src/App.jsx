// agar humne screen per koi chez change karky dekhani hy tw state ka use aaye ga

import { useState } from "react";

// basic counter app
function App() {
  const [num, setNum] = useState(0);

  console.log("component chala");

  const myFun = () => {};
  // console.log("usestate ki return value ", a);

  return (
    <>
      <button
        onClick={() => {
          console.log("add");
          setNum(num + 1);
        }}
      >
        add
      </button>

      <p>{num}</p>

      <button
        onClick={() => {
          console.log("minus");
          setNum(num - 1);
        }}
      >
        minus
      </button>
    </>
  );
}

// conditional rendering
function App() {
  let isLoggedIn = false;

  return <div className="testing">{isLoggedIn ? <>admin side</> : null}</div>;
}
// export default App;

// react docs => https://react.dev/learn#updating-the-screen
function MyButton(Props) {
  return (
    <button onClick={Props.handleClick}>Clicked {Props.count} times</button>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  console.log("running again");

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
      {/* <MyButton count={67} handleClick={()=>{}}/> */}
    </div>
  );
}
