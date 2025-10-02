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
    setResponse(`Hi ${name}, ${response}`);
    setResponse(response);
    setPrompt("");
    setLoading(false);
  };

  return (
    <div className="bg-cyan-100 min-h-screen flex flex-col ">
      <div className="m-2 py-5 items-center flex flex-col bg-sky-200 pt-5 shadow-xl/30">
        <h1 className="text-black font-bold ">All About Plants</h1>
        <input
          className="border-black text-black border-2 rounded-md p-3 m-2 w-150 font-semibold"
          type="text"
          value={prompt}
          onChange={handleInputChange}
        />
        <button
  className="bg-black m-2 text-white rounded-md p-2 w-50 font-bold flex items-center justify-center"
  onClick={handleSubmit}
  disabled={isLoading}
>
  {isLoading && (
    <svg
      className="mr-3 w-5 h-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  )}
  {isLoading ? "Generating..." : "Submit"}
</button>

        <p
          className={`border-black border-2 rounded w-200 m-2 py-2 p-2 flex flex-col font-semibold shadow-xl/30 ${
            response ? "" : "hidden"
          }`}
        ><b>Plants:</b>
          {response}
        </p>
      </div>
    </div>
  );
}

export default App;
