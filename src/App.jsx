import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div id="change" className="w-10 border-4  border-white h-10 rounded-full"></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;


// https://www.freelancer.com/contest/2392101
// https://www.freelancer.com/contest/jewelry-business-branding-logo-design-2392172?sb=t
// https://www.freelancer.com/contest/minimalist-logo-design-for-payforce-one-2392090?sb=t
// https://www.freelancer.com/contest/recruiting-company-logo-design-smf-2392081?sb=t
// https://www.freelancer.com/contest/2392029?sb=t