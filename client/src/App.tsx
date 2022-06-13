import React, { useState } from "react";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const onCallApi = async () => {
    try {
      const response = await fetch("/api", {
        method: "GET",
      });
      const text = await response.text();
      console.log(text);
      setApiResponse(text);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="App">
      <div>SAMPLE</div>
      <div>
        <button onClick={onCallApi}>Call API</button>
      </div>
      <div>{apiResponse}</div>
    </div>
  );
}

export default App;
