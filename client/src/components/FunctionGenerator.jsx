import PropertiesGenerator from "./PropertiesGenerator";
import ReturnObjProperties from "./ReturnObjPropertiesGenerator";

const FunctionGenerator = (props) => {
  const paramProperties = [];
  const returnObjProperties = [];

  for (let i = 0; i < props.numParamProperties[props.funcIndex]; i++) {
    paramProperties.push(
      <PropertiesGenerator
        key={i}
        funcIndex={props.funcIndex}
        propIndex={i}
        func={props.func}
        updateParamProps={props.updateParamProps}
      />
    );
  }

  for (let i = 0; i < props.numObjectProperties[props.funcIndex]; i++) {
    returnObjProperties.push(
      <ReturnObjProperties
        key={i}
        funcIndex={props.funcIndex}
        propIndex={i}
        func={props.func}
        updateObjectProps={props.updateObjectProps}
      />
    );
  }

  return (
    <div>
      <details open>
        <summary>
          <b>Function:{props.funcIndex} </b>
        </summary>
        <div className="form-group">
          <div className="row">
            <div className="col-12">
              <div>
                <b>Function:{props.funcIndex} </b>
              </div>
              <label>Function Name</label>
              <input
                className="form-control form-control-sm"
                id={"name" + props.funcIndex}
                value={props.func[props.funcIndex].name}
                onChange={(e) =>
                  props.updateFunc(e.target.value, props.funcIndex, "name")
                }
              />
              <label>Function Description</label>
              <input
                className="form-control form-control-sm"
                id={"desc" + props.funcIndex}
                value={props.func[props.funcIndex].desc}
                onChange={(e) =>
                  props.updateFunc(e.target.value, props.funcIndex, "desc")
                }
              />
            </div>
          </div>
        </div>
        <details open>
          <summary>
            <b>Function Params:{props.funcIndex}</b>
          </summary>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-11">
              <button
                className="btn btn-primary"
                onClick={() => props.addParamProps(props.funcIndex)}
              >
                + Add Properties
              </button>
              <button
                className="btn btn-danger"
                onClick={() => props.removeParamProps(props.funcIndex)}
              >
                - Remove Properties
              </button>
              {paramProperties}
            </div>
          </div>
        </details>
        <details open>
          <summary>
            <b>Return Object Properties: {props.funcIndex}</b>
          </summary>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <div></div>
              <button
                className="btn btn-primary"
                onClick={() => props.addObjectProps(props.funcIndex)}
              >
                + Add Properties
              </button>
              <button
                className="btn btn-danger"
                onClick={() => props.removeObjectProps(props.funcIndex)}
              >
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
