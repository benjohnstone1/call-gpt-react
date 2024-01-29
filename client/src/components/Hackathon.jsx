import { useState } from "react";
// import axios from "axios";
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
  const [template, setTemplate] = useState("");

  return (
    <div>
      <h4>Bot Builder</h4>
      <div className="form-group">
        <label>Template Selection: </label>
        <select
          className="form-control form-control-sm"
          id={"template"}
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        >
          <option value="airpods">Airpods Pro</option>
          <option value="example2">Example 2</option>
          <option value="build">Build Your Own</option>
        </select>
      </div>
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
      <FunctionManifest
        initialGreeting={initialGreeting}
        systemContext={systemContext}
        languageSettings={languageSettings}
      />

      <h4>To do:</h4>
      <p>Fix webhook endpoint functionality - updates</p>
      <p>Create templates - airpods pro + another example</p>
      <p>Create modals for function generator?</p>
      <p>Flex transfer update sendToFlex serverless </p>
      <p>Quickly deploy serverless w/ examples</p>
      <p>Deploy working application</p>
    </div>
  );
};

export default Hackathon;
