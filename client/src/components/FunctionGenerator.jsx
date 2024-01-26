import { useState } from "react";
import PropertiesGenerator from "./PropertiesGenerator";

const FunctionGenerator = (props) => {
  const paramProperties = [];
  const [numParamProperties, setNumParamProperties] = useState(1);
  const returnObjProperties = [];
  const [numReturnProperties, setNumReturnProperties] = useState(1);
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
      <details open>
        <summary>
          <b>Function:{props.number} </b>
        </summary>
        <div className="form-group">
          <div className="row">
            <div className="col-12">
              <div>
                <b>Function:{props.number} </b>
              </div>
              <label>Function Name</label>
              <input
                className="form-control form-control-sm"
                id={"name" + props.number}
                value={props.func[props.number].name}
                onChange={(e) =>
                  props.updateFunc(e.target.value, props.number, "name")
                }
              />
              <label>Function Description</label>
              <input
                className="form-control form-control-sm"
                id={"desc" + props.number}
                value={props.func[props.number].desc}
                onChange={(e) =>
                  props.updateFunc(e.target.value, props.number, "desc")
                }
              />
            </div>
          </div>
        </div>
        <details open>
          <summary>
            <b>Function Params:{props.number}</b>
          </summary>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-11">
              <button className="btn btn-primary" onClick={addParamProps}>
                + Add Properties
              </button>
              <button className="btn btn-danger" onClick={removeParamProps}>
                - Remove Properties
              </button>
              {paramProperties}
            </div>
          </div>{" "}
        </details>
        <details open>
          <summary>
            <b>Return Object:{props.number} </b>
          </summary>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <div></div>
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
            </div>
          </div>
        </details>
        <details open>
          <summary>
            <b>Return Object Properties</b>
          </summary>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <div></div>
              <button className="btn btn-primary" onClick={addReturnProps}>
                + Add Properties
              </button>
              <button className="btn btn-danger" onClick={removeReturnProps}>
                - Remove Properties
              </button>
              {returnObjProperties}
            </div>
          </div>
        </details>
      </details>
    </div>
  );
};

export default FunctionGenerator;
