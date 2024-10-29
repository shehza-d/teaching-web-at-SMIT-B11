// agar humne screen per koi chez change karky dekhani hy tw state ka use aaye ga

import { useState } from "react";

// function App() {
//   const [num, setNum] = useState(0);

//   console.log("component chala");

//   const myFun = () => {};
//   // console.log("usestate ki return value ", a);

//   return (
//     <>
//       <button
//         onClick={() => {
//           console.log("add");
//           setNum(num + 1);
//         }}
//       >
//         add
//       </button>

//       <p>{num}</p>

//       <button
//         onClick={() => {
//           console.log("minus");
//           setNum(num - 1);
//         }}
//       >
//         minus
//       </button>
//     </>
//   );
// }

function App() {
  let isLoggedIn = false;

  if (isLoggedIn) {
    return <div>welcome to dashboard</div>;
  } else {
    return <div>login </div>;
  }
}

export default App;
