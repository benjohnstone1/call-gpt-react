import { useState } from "react";

const FunctionGenerator = (props) => {
  const FunctionManifest = (props) => {
    const functionManifest = [];
    const [numFunctions, setNumFunctions] = useState(1);

    const addFunction = () => {
      setNumFunctions(numFunctions + 1);
    };

    const removeFunction = () => {
      if (numFunctions > 1) {
        setNumFunctions(numFunctions - 1);
      }
    };

    for (let i = 0; i < numFunctions; i++) {
      functionManifest.push(<FunctionGenerator key={i} number={i} />);
    }

    return (
      <div>
        <button className="btn btn-primary" onClick={addFunction}>
          + Add Function
        </button>
        <button className="btn btn-danger" onClick={removeFunction}>
          - Remove Function
        </button>
        {functionManifest}
      </div>
    );
  };

  const FunctionGenerator = (props) => {
    const paramProperties = [];
    const [numParamProperties, setNumParamProperties] = useState(1);
    const returnObjProperties = [];
    const [numReturnProperties, setNumReturnProperties] = useState(1);
    const [funcName, setFuncName] = useState("");
    const [funcDesc, setFuncDesc] = useState("");
    const [returnObjName, setReturnObjName] = useState("");
    const [returnObjDesc, setReturnObjDesc] = useState("");

    for (let i = 0; i < numParamProperties; i++) {
      paramProperties.push(<PropertiesGenerator key={i} number={i} />);
    }

    const addParamProps = () => {
      setNumParamProperties(numParamProperties + 1);
    };

    const removeParamProps = () => {
      if (numParamProperties > 1) {
        setNumParamProperties(numParamProperties - 1);
      }
    };

    for (let i = 0; i < numReturnProperties; i++) {
      returnObjProperties.push(<PropertiesGenerator key={i} number={i} />);
    }

    const addReturnProps = () => {
      setNumReturnProperties(numReturnProperties + 1);
    };

    const removeReturnProps = () => {
      if (numReturnProperties > 1) {
        setNumReturnProperties(numReturnProperties - 1);
      }
    };

    return (
      <div>
        <div className="form-group">
          <label>Function Name</label>
          <input
            className="form-control form-control-sm"
            id={funcName}
            value={funcName}
            onChange={(e) => setFuncName(e.target.value)}
          />
          <label>Function Description</label>
          <input
            className="form-control form-control-sm"
            id={funcDesc}
            value={funcDesc}
            onChange={(e) => setFuncDesc(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addParamProps}>
          + Add Props
        </button>
        <button className="btn btn-danger" onClick={removeParamProps}>
          - Remove Props
        </button>
        {paramProperties}

        <div className="form-group">
          <label>Return Object Name</label>
          <input
            className="form-control form-control-sm"
            id={returnObjName}
            value={returnObjName}
            onChange={(e) => setReturnObjName(e.target.value)}
          />
          <label>Return Object Description</label>
          <input
            className="form-control form-control-sm"
            id={returnObjDesc}
            value={returnObjDesc}
            onChange={(e) => setReturnObjDesc(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addReturnProps}>
          + Add Props
        </button>
        <button className="btn btn-danger" onClick={removeReturnProps}>
          - Remove Props
        </button>
        {returnObjProperties}
      </div>
    );
  };

  const PropertiesGenerator = (props) => {
    const [propName, setPropName] = useState("");
    const [propDesc, setPropDesc] = useState("");
    return (
      <>
        <div className="form-group">
          <label>PropName</label>
          <input
            className="form-control form-control-sm"
            id={propName}
            value={propName}
            onChange={(e) => setPropName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select>
            <option value="String">String</option>
            <option value="Int">Int</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control form-control-sm"
            id={propDesc}
            value={propDesc}
            onChange={(e) => setPropDesc(e.target.value)}
          />
        </div>
      </>
    );
  };

  return (
    <div>
      <div style={{ border: "1px solid black" }} className="container">
        <FunctionManifest />
      </div>
    </div>
  );
};

export default FunctionGenerator;

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
