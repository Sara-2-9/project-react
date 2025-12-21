import "./App.css";
import { useState } from "react";
import Prompt from "./components/prompt";

function App() {
  const [response, setResponse] = useState("");

  return (
    <>
      <div className="h-screen bg-neutral-900 flex flex-col justify-between items-center p-4">
        <h1 className="text-6xl font-bold text-fuchsia-300">Chat with AI</h1>
        <p className="text-white">{response}</p>
        <Prompt setResponse={setResponse} />
      </div>
    </>
  );
}

export default App;
