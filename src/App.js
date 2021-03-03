// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Numbers } from "./components/Numbers";

export const App = () => {
  const [persons] = useState([
    { name: "Mary", number: "99999999" },
    { name: "Mar", number: "8888" },
    { name: "John", number: "22222222" },
    { name: "Zackery", number: "333333333" },
  ]);

  return (
    <div>
      <Numbers persons={persons}></Numbers>
    </div>
  );
};

export default App;
