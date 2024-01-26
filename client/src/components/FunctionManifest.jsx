import { useState } from "react";
import FunctionGenerator from "./FunctionGenerator";

// import update from "immutability-helper";

const FunctionManifest = (props) => {
  const [numFunctions, setNumFunctions] = useState(1);
  const [numParamProperties, setNumParamProperties] = useState(1);

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
          returnObjProperties: [
            {
              name: "language",
              type: "String",
              desc: "The types of languages the user could want to converse in",
            },
          ],
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

  const addParamProps = (index) => {
    setNumParamProperties(numParamProperties + 1);
    const newParamProperties = [
      ...func[index].properties,
      { name: "", type: "String", desc: "" },
    ]; //not iterable -?

    const nextFunc = {
      ...func[index],
      properties: newParamProperties,
    };

    const f = func.map((c, i) => {
      if (i === index) {
        return nextFunc;
      } else {
        return c;
      }
    });

    setFunc(f);
    console.log(func[index].properties);
  };

  const removeParamProps = (index) => {
    // not working for removal of multi functions
    if (numParamProperties > 1) {
      setNumParamProperties(numParamProperties - 1);
      // Remove end property
      const newParamProps = func[index].properties.slice(
        0,
        numParamProperties - 1
      );
      // Add new array into the function
      const nextFunc = {
        ...func[index],
        properties: newParamProps,
      };
      // Map function array with new function
      const f = func.map((c, i) => {
        if (i === index) {
          return nextFunc;
        } else return c;
      });
      setFunc(f);
    }
  };

  const addFunction = () => {
    setNumFunctions(numFunctions + 1);
    setFunc([
      ...func,
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
            returnObjProperties: [
              {
                name: "language",
                type: "String",
                desc: "The types of languages the user could want to converse in",
              },
            ],
          },
        ],
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
        addParamProps={addParamProps}
        numParamProperties={numParamProperties}
        removeParamProps={removeParamProps}
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
