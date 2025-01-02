import { useState } from "react";

const App = () => {
  const [resData, setResData] = useState("");

  async function handleButton() {
    try {
      // SIMPLE REQUEST
      // const response = await fetch("http://localhost:3000/user", {
      //   method: "GET",
      // });

      // PREFLIGHT REQUEST
      // const response = await fetch("http://localhost:3000/update", {
      //   method: "PUT",
      // });

      // Credentials Request
      const response = await fetch("http://localhost:3000/cred", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer vs12321sdfsdf1331dwgdf3",
        },
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || `HTTP error status: ${err.status}`);
      }

      const data = await response.json();
      setResData(data.message);
      console.log(data.message);
      console.log(data.token); // with credentials
    } catch (err) {
      throw new Error(err.message || `An unknown error expected`);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Hello World</h1>
        <button
          onClick={() => {
            handleButton();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
