import React from 'react';

function CodeExtractor({ inputString }) {
    const pattern = /(?:.*?\n)?(.*?)/gs;
    const codeBlocks = inputString.match(pattern) || [];
    const extractedCode = codeBlocks.map(block => block.replace(/```/g, '').trim()).join('\n');
    return extractedCode;
};

export default CodeExtractor;
