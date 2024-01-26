import { useState } from "react";
import FunctionGenerator from "./FunctionGenerator";

// import update from "immutability-helper";

const FunctionManifest = (props) => {
  const [numFunctions, setNumFunctions] = useState(1);
  const [numParamProperties, setNumParamProperties] = useState([1]);
  const [numObjectProperties, setNumObjectProperties] = useState([1]);
  const functionManifest = [];

  let initialFunctions = [
    {
      name: "",
      desc: "",
      properties: [
        {
          name: "",
          type: "String",
          desc: "",
        },
      ],
      returnObjProperties: [
        {
          name: "",
          type: "String",
          desc: "",
        },
      ],
    },
  ];

  let sampleFunctions = [
    {
      name: "name",
      desc: "desc",
      properties: [
        {
          name: "languages",
          type: "String",
          desc: "The types of languages the user could want to converse in",
        },
      ],
      returnObjProperties: [
        {
          name: "locale",
          type: "String",
          desc: "The language locale that should be returned",
        },
      ],
    },
  ];

  const [func, setFunc] = useState(initialFunctions);

  //To do
  const populateSampleFunctions = () => {
    setFunc(sampleFunctions);
    setNumFunctions(sampleFunctions.length); //update based on size of initialFunctions
    // console.log(sampleFunctions.length);
    // console.log(sampleFunctions.properties);
    // setNumParamProperties(initialFunctions.properties.length); //likely easiest to do this manually! e.g. [1,2,1,1]
    // setNumParamProperties(initialFunctions.returnObjProperties.length);
  };

  const removeSampleFunctions = () => {
    setFunc(initialFunctions);
    setNumFunctions(1);
    setNumParamProperties([1]);
    setNumParamProperties([1]);
  };

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

  function updateParamProps(newParams, funcIndex, propsIndex, id) {
    const newParamsArr = func[funcIndex].properties.map((f, i) => {
      if (i === propsIndex) {
        if (id === "desc") {
          f.desc = newParams;
        }
        if (id === "name") {
          f.name = newParams;
        }
        if (id === "type") {
          f.type = newParams;
        }
        return f;
      } else {
        return f;
      }
    });
    const nextFunc = {
      ...func[funcIndex],
      properties: newParamsArr,
    };
    //need to re-insert this back then call set func
    const f = func.map((c, i) => {
      if (i === funcIndex) {
        return nextFunc;
      } else {
        return c;
      }
    });
    setFunc(f);
  }

  const addParamProps = (funcIndex) => {
    // we want [1] -> [2]
    const newNumParamProps = numParamProperties.map((c, i) => {
      if (i === funcIndex) {
        return c + 1;
      } else {
        return c;
      }
    });
    setNumParamProperties(newNumParamProps); //not trying to add trying to replace use map
    const newParams = { name: "", type: "String", desc: "" };
    const insertParamProperties = [...func[funcIndex].properties, newParams];
    const nextFunc = {
      ...func[funcIndex],
      properties: insertParamProperties,
    };
    const f = func.map((c, i) => {
      if (i === funcIndex) {
        return nextFunc;
      } else {
        return c;
      }
    });
    setFunc(f);
  };

  const removeParamProps = (funcIndex) => {
    // decrease number props
    if (numParamProperties[funcIndex] > 1) {
      const newNumParamProps = numParamProperties.map((c, i) => {
        if (i === funcIndex) {
          return c - 1;
        } else {
          return c;
        }
      });
      setNumParamProperties(newNumParamProps);
      // Remove end property
      const newParamProps = func[funcIndex].properties.slice(
        0,
        numParamProperties[funcIndex] - 1
      );
      // Add new array into the function
      const nextFunc = {
        ...func[funcIndex],
        properties: newParamProps,
      };
      //   // Map function array with new function
      //this is creating empty array of properties
      const f = func.map((c, i) => {
        if (i === funcIndex) {
          return nextFunc;
        } else return c;
      });
      setFunc(f);
    }
  };

  const addObjectProps = (funcIndex) => {
    // Update object prop size
    const newNumObjectProps = numObjectProperties.map((c, i) => {
      if (i === funcIndex) {
        return c + 1;
      } else {
        return c;
      }
    });
    setNumObjectProperties(newNumObjectProps);
    const newObjectProperties = [
      ...func[funcIndex].properties,
      { name: "", type: "String", desc: "" },
    ];
    const nextFunc = {
      ...func[funcIndex],
      properties: newObjectProperties,
    };
    const f = func.map((c, i) => {
      if (i === funcIndex) {
        return nextFunc;
      } else {
        return c;
      }
    });
    setFunc(f);
  };

  const removeObjectProps = (funcIndex) => {
    if (numObjectProperties[funcIndex] > 1) {
      const newNumObjectProps = numObjectProperties.map((c, i) => {
        if (i === funcIndex) {
          return c - 1;
        } else {
          return c;
        }
      });
      setNumObjectProperties(newNumObjectProps);
      // Remove end property
      const newObjectProps = func[funcIndex].properties.slice(
        0,
        numObjectProperties[funcIndex] - 1
      );
      // Add new array into the function
      const nextFunc = {
        ...func[funcIndex],
        returnObjProperties: newObjectProps,
      };
      // Map function array with new function
      const f = func.map((c, i) => {
        if (i === funcIndex) {
          return nextFunc;
        } else return c;
      });
      setFunc(f);
    }
  };

  const addFunction = () => {
    setNumFunctions(numFunctions + 1);
    setNumParamProperties([...numParamProperties, 1]); //increase array size e.g [2] becomes [2,1]
    setNumObjectProperties([...numObjectProperties, 1]);
    console.log(numParamProperties);
    setFunc([
      ...func,
      {
        name: "",
        desc: "",
        properties: [
          {
            name: "",
            type: "String",
            desc: "",
          },
        ],
        returnObjProperties: [
          {
            name: "",
            type: "String",
            desc: "",
          },
        ],
      },
    ]);
  };

  const removeFunction = () => {
    if (numFunctions > 1) {
      setNumFunctions(numFunctions - 1);
      setNumParamProperties(numParamProperties.slice(0, numFunctions - 1)); //decrease array size e.g [2,1] becomes [2]
      setNumObjectProperties(numObjectProperties.slice(0, numFunctions - 1)); //decrease array size
      setFunc(func.slice(0, numFunctions - 1));
    }
  };

  for (let i = 0; i < numFunctions; i++) {
    functionManifest.push(
      <FunctionGenerator
        key={i}
        funcIndex={i}
        func={func}
        updateFunc={updateFunc}
        addParamProps={addParamProps}
        numParamProperties={numParamProperties}
        removeParamProps={removeParamProps}
        updateParamProps={updateParamProps} // look at whether we just update func instead?
        addObjectProps={addObjectProps}
        numObjectProperties={numObjectProperties}
        removeObjectProps={removeObjectProps}
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
        <button className="btn btn-secondary" onClick={removeSampleFunctions}>
          Remove Sample Functions
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
