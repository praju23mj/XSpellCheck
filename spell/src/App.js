import React, { useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const App = () => {
  const [inputText, setInputText] = useState("");
  const [correction, setCorrection] = useState(null);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputText(value);

    // Split text into words
    const words = value.trim().split(/\s+/);

    // Check each word against custom dictionary
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (customDictionary[word]) {
        // If a match is found, set correction suggestion and break loop
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }

    // If no incorrect word is found, reset correction
    setCorrection(null);
  };

  return (
    <div classname="container">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      {correction && <div>{correction}</div>}
    </div>
  );
};

export default App;
