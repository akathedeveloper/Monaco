"use client";
import React from "react";
import { useState } from "react";

function page() {
  const [prompt, setPrompt] = useState("");
  const [res, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = "http://localhost:11434/api/generate";
      const requestBody = {
        model: "llama2",
        prompt: prompt,
        stream: false,
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);
      setResponse(data.response);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your prompt:
          <br />
          <input
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            placeholder="Enter your prompt"
            className="text-black"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {loading && <div>Loading...</div>}
      {res && <div>Response: {res}</div>}
    </div>
  );
}

export default page;