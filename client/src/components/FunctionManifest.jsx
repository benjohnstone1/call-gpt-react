import { useState } from "react";
import FunctionGenerator from "./FunctionGenerator";

const FunctionManifest = (props) => {
  const [numFunctions, setNumFunctions] = useState(1);
  const [func, setFunc] = useState([
    {
      name: "name",
      desc: "desc",
      properties: [
        {
          name: "language",
          type: "String",
          desc: "The types of languages the user could want to converse in",
        },
      ],
      returnObj: [
        {
          name: "name",
          desc: "desc",
        },
      ],
    },
  ]);

  function updateFunc(newFunc, index, id) {
    const newFuncArr = func.map((f, i) => {
      if (i === index) {
        if (id === "desc") {
          f.desc = newFunc;
        }
        if (id === "name") {
          f.name = newFunc;
        }
        return f;
      } else {
        return f;
      }
    });
    setFunc(newFuncArr);
  }
  const functionManifest = [];

  const populateSampleFunctions = () => {
    console.log(func);
  };

  const addFunction = () => {
    setNumFunctions(numFunctions + 1);
    setFunc([
      ...func,
      {
        name: "",
        desc: "",
        properties: [],
        returnObj: [],
      },
    ]);
  };

  const removeFunction = () => {
    if (numFunctions > 1) {
      setNumFunctions(numFunctions - 1);
      setFunc(func.slice(0, numFunctions - 1));
    }
  };

  for (let i = 0; i < numFunctions; i++) {
    functionManifest.push(
      <FunctionGenerator
        key={i}
        number={i}
        func={func}
        updateFunc={updateFunc}
      />
    );
  }
  return (
    <div>
      <div style={{ border: "1px solid black" }} className="container">
        <div>
          <b>Function Manifest Generator</b>
        </div>
        <button className="btn btn-primary" onClick={addFunction}>
          + Add Function
        </button>
        <button className="btn btn-danger" onClick={removeFunction}>
          - Remove Function
        </button>
        <button className="btn btn-warning" onClick={populateSampleFunctions}>
          Populate Sample Functions
        </button>
        {functionManifest}
      </div>
    </div>
  );
};

export default FunctionManifest;

// Example Function
/*
function
    name
    description
    params {
        properties {
            prop1 {

            }
        }
        required: [],
    }
    returns {
        properties {
            prop1 {

            }
        }
    }
 {
    type: "function",
    function: {
      name: "checkLanguage",
      description:
        "Check the language used in the conversation to know how to reply to the user, the user may choose to switch languages during the conversation",
      parameters: {
        type: "object",
        properties: {
          language: {
            type: "string",
            enum: ["english", "french", "italian", "spanish"],
            description:
              "The types of languages the user coule want to converse in",
          },
          prop2: {
            type: "string",
            // enum: ["es", "fr", "it", "es"],
            description:
              "desc",
          },
        },
        required: ["language"], //need to get a value before calling it
      },
      returns: {
        type: "object",
        properties: {
          locale: {
            type: "string",
            description: "The language locale that should be returned",
          },
        },
      },
    },
  },

  */
