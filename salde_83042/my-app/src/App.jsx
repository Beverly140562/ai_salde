import { useState } from "react";
import { askAI } from "./lib/ai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await askAI(prompt);
    setResponse(response);
    setPrompt("");
    setLoading(false);
  };

  return (
    <>
      <div className="m-2 py-2 items-center flex flex-col">
        <input
          className="border-black text-black border-2 rounded-md p-1"
          type="text"
          value={prompt}
          onChange={handleInputChange}
        />
        <button
          className="bg-black m-2 text-white rounded-md p-1"
          onClick={handleSubmit}
        >
          {isLoading ? "Generating..." : "Submit"}
        </button>
        <p
          className={`border-black border-2 rounded w-80 m-2 py-2 ${
            response ? "" : "hidden"
          }`}
        >
          {response}
        </p>
      </div>
    </>
  );
}

export default App;
