import "./App.css";
import { useState } from "react";
import Prompt from "./components/prompt";
import Message from "./components/message";

function App() {
  const [response, setResponse] = useState("");

  return (
    <>
      <div className="h-screen bg-neutral-900 flex flex-col justify-between items-center p-4">
        <h1 className="text-6xl font-bold text-fuchsia-300 p-3">Chat with AI</h1>
        <div className="flex-1 overflow-y-auto min-h-0 w-full">
          <p className="text-white px-20">
            {response && (
              <Message 
                name={"AI"}
                text={response}
                timeLabel={new Date().toLocaleTimeString("it-IT", {
                  hour: "2-digit",
                  minute: "2-digit",
                })} 
              />
            )}
          </p>
        </div>
        <Prompt setResponse={setResponse} />
      </div>
    </>
  );
}

export default App;
