import { useState } from "react";
import axios from "axios";
import "../styles/Hackathon.css";

// Components
import FunctionManifest from "./FunctionManifest";

const Hackathon = () => {
  const [systemContext, setSystemContext] = useState(
    "You are an outbound sales representative selling Apple Airpods. You have a youthful and cheery personality. Keep your responses as brief as possible but make every attempt to keep the caller on the phone without being rude. Don't ask more than 1 question at a time. Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. Speak out all prices to include the currency. Please help them decide between the airpods, airpods pro and airpods max by asking questions like 'Do you prefer headphones that go in your ear or over the ear?'. If they are trying to choose between the airpods and airpods pro try asking them if they need noise canceling. Once you know which model they would like ask them how many they would like to purchase and try to get them to place an order. You must add a '•' symbol every 5 to 10 words at natural pauses where your response can be split for text to speech."
  );
  const [initialGreeting, setInitialGreeting] = useState(
    "Hello! I understand you're looking for a pair of AirPods, is that correct?"
  );
  const [languageSettings, setLanguageSettings] = useState("English & French");
  const [functionGenerator, setFunctionGenerator] = useState(
    "Need to generate function manifest file - Name, description, type (object), parameters, returns "
  );
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState({
    data: "Hello! I understand you're looking for a pair of AirPods, is that correct?",
  });

  const getOpenAIResponse = () => {
    axios
      .get("http://localhost:3000/hackathon/ask-gpt/" + prompt)
      .then((response) => {
        console.log(response);
        setResponse(response);
      })
      .catch((e) => console.log(e));
  };

  const createVirtualAgent = () => {
    axios
      .post("http://localhost:3000/hackathon/set-user-context", {
        greeting: initialGreeting,
        context: systemContext,
        languageContext: languageSettings,
        functionContext: functionGenerator, //update to formData from functionGenrator V2
      })
      .then((response) => {
        console.log(response);
        setResponse(response);
        alert("Success! Created Virtual Agent");
      })
      .catch((e) => {
        alert(e);
        console.log(e);
      });
  };

  return (
    <div>
      <h4>To do:</h4>
      <p>
        Function Generator - need to populate sample then work on pushing into
        tools (back-end) Will need to also create generic functions for these in
        back-end application
      </p>
      <p>
        Update language settings to multi select dropdown - add this information
        to System Context{" "}
      </p>
      <p>Flex transfer </p>
      <p>
        SMS use case - update endpoint for SMS and number to handle route in
        back-end, remove reference to deepgram,elevenlabs{" "}
      </p>
      <p>
        Bot tester - STRETCH Goal - add client SDK and show transcription in the
        console (could do same for SMS)
      </p>
      <h4>Bot Builder</h4>
      <div className="form-group">
        <label htmlFor="systemContext">System Context</label>
        <textarea
          id="systemContext"
          className="form-control w-100 largeInput"
          value={systemContext}
          placeholder="System context"
          onChange={(e) => setSystemContext(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="languageSettings">Language Settings</label>
        <input
          id="languageSettings"
          className="form-control"
          value={languageSettings}
          placeholder="Language settings"
          onChange={(e) => setLanguageSettings(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="initialGreeting">Initial Greeting</label>
        <input
          id="initialGreeting"
          className="form-control"
          value={initialGreeting}
          placeholder="Initial greeting"
          onChange={(e) => setInitialGreeting(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="functionGenerator">Function Generator</label>
        <textarea
          id="functionGenerator"
          className="form-control"
          value={functionGenerator}
          placeholder="Function generator"
          onChange={(e) => setFunctionGenerator(e.target.value)}
        />
      </div>
      <FunctionManifest />
      <button onClick={createVirtualAgent} className="btn btn-primary">
        Create Virtual Agent
      </button>
      <h2>Bot Tester</h2>
      <div className="form-group">
        <label htmlFor="response">GPT</label>
        <input
          id="response"
          className="form-control"
          value={response.data}
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="prompt">Prompt</label>
        <input
          id="prompt"
          className="form-control"
          value={prompt}
          placeholder="Type your prompt here..."
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button onClick={getOpenAIResponse} className="btn btn-primary">
        Ask GPT
      </button>
    </div>
  );
};

export default Hackathon;
