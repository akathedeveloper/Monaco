import React, { useState } from 'react';
import CodeExtractor from './CodeExtractor'; // Assuming CodeExtractor is in a separate file
import Page from './Page';
import CodeEditor from './CodeEditor'

function App() {
  const [prompt, setPrompt] = useState('');
  const [extractedCode, setExtractedCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have logic to fetch the prompt from an API or elsewhere
    // For this example, I'm directly setting the extracted code from the prompt
    const mockPrompt = `
      To create a simple Solidity contract that prints "Hello World" when it is deployed and interacted with, follow these steps:
      \`\`\`solidity
      // SPDX-License-Identifier: MIT
      pragma solidity ^0.8.4;

      contract HelloWorld {
          function greet() public view returns (string memory) {
              return "Hello World";
          }
      }
      \`\`\`
    `;

    setPrompt(mockPrompt);
    setExtractedCode(CodeExtractor({ text: mockPrompt }));
  };

  return (
    <>
    <Page/>
    <CodeEditor/>
    </>
  );
}

export default App;
