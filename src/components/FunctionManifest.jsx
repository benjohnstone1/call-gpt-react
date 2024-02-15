import React, { useState } from "react";
import FunctionGenerator from "./FunctionGenerator";
import tools from "../tools";
import axios from "axios";

import { Button } from "@twilio-paste/core/button";
import { HelpText } from "@twilio-paste/core/help-text";
import { AlertDialog } from "@twilio-paste/core/alert-dialog";

const FunctionManifest = (props) => {
  const [numFunctions, setNumFunctions] = useState(1);
  const [numParamProperties, setNumParamProperties] = useState([1]);
  const [numObjectProperties, setNumObjectProperties] = useState([1]);
  const [webhook, setWebhook] = useState(
    "https://hackathon-open-ai-2890.twil.io"
  );
  const functionManifest = [];
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  let initialFunctions = [
    {
      name: "",
      desc: "",
      properties: [
        {
          name: "",
          type: "String",
          enum: [],
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

  let sampleFunctions = tools;

  const [func, setFunc] = useState(initialFunctions);

  const populateSampleFunctions = (e) => {
    e.preventDefault();
    setFunc(sampleFunctions);
    setNumFunctions(sampleFunctions.length);
    setNumParamProperties([1, 1, 1, 2]); // hardcoded - can be calculated from sampleFunctions length
    setNumObjectProperties([1, 1, 1, 2]);
  };

  const removeSampleFunctions = (e) => {
    e.preventDefault();
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
        if (id === "enum") {
          f.enum = newParams;
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
    const newParams = { name: "", type: "String", enum: "", desc: "" };
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

  function updateObjectProps(newParams, funcIndex, propsIndex, id) {
    const newParamsArr = func[funcIndex].returnObjProperties.map((f, i) => {
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
      returnObjProperties: newParamsArr,
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
      ...func[funcIndex].returnObjProperties,
      { name: "", type: "String", desc: "" },
    ];
    const nextFunc = {
      ...func[funcIndex],
      returnObjProperties: newObjectProperties,
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
      const newObjectProps = func[funcIndex].returnObjProperties.slice(
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

  const addFunction = (e) => {
    e.preventDefault();
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
            enum: [],
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

  const removeFunction = (e) => {
    e.preventDefault();
    if (numFunctions > 1) {
      setNumFunctions(numFunctions - 1);
      setNumParamProperties(numParamProperties.slice(0, numFunctions - 1)); //decrease array size e.g [2,1] becomes [2]
      setNumObjectProperties(numObjectProperties.slice(0, numFunctions - 1)); //decrease array size
      setFunc(func.slice(0, numFunctions - 1));
    }
  };

  const updateWebhookEndpoint = (e) => {
    setWebhook(e.target.value);
  };

  const createVirtualAgent = (e) => {
    e.preventDefault();
    for (let i = 0; i < func.length; i++) {
      func[i].webhookURL = webhook + "/" + func[i].name;
    }
    console.log(func);
    axios
      .post("https://call-gpt-hack.fly.dev/hackathon/set-user-context", {
        greeting: props.initialGreeting,
        context: props.systemContext,
        languageContext: props.languageSettings,
        functionContext: func,
      })
      .then((response) => {
        console.log(response);
        //alert("Success! Created Virtual Agent");
        handleOpen();
      })
      .catch((e) => {
        alert(e);
        console.log(e);
      });
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
        updateParamProps={updateParamProps}
        updateObjectProps={updateObjectProps}
        addObjectProps={addObjectProps}
        numObjectProperties={numObjectProperties}
        removeObjectProps={removeObjectProps}
        webhook={webhook}
      />
    );
  }
  return (
    <div>
      <div style={{ border: "1px solid black" }} className="container">
        <div>
          <b>Function Manifest Generator</b>
        </div>
        <button className="btn btn-outline-primary" onClick={addFunction}>
          + Add Function
        </button>
        <button className="btn btn-outline-danger" onClick={removeFunction}>
          - Remove Function
        </button>
        <br />
        <button
          className="btn btn-outline-primary"
          onClick={populateSampleFunctions}
        >
          + Populate Sample Functions
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={removeSampleFunctions}
        >
          - Remove Sample Functions
        </button>
        <div>
          <label>Function Webhook Endpoint</label>
          <input
            className="form-control form-control-sm"
            id={"webhook"}
            value={webhook}
            onChange={(e) => updateWebhookEndpoint(e)}
          />
        </div>
        {functionManifest}
      </div>
      <HelpText id="function_generator_help_text">
        Actions are APIs that your agent can use to retreive information or
        perform tasks.
      </HelpText>
      <br />
      <Button onClick={createVirtualAgent} variant="primary">
        Create Virtual Agent
      </Button>

      <AlertDialog
        heading="Virtual Agent Created"
        isOpen={isOpen}
        onConfirm={handleClose}
        onConfirmLabel="OK"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
        Success!
      </AlertDialog>
    </div>
  );
};

export default FunctionManifest;
