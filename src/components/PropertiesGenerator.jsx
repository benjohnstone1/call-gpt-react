const PropertiesGenerator = (props) => {
  return (
    <>
      <div className="form-group">
        <label>PropName: {props.propIndex}</label>
        <input
          className="form-control form-control-sm"
          id={"name"}
          value={props.func[props.funcIndex].properties[props.propIndex].name}
          onChange={(e) =>
            props.updateParamProps(
              e.target.value,
              props.funcIndex,
              props.propIndex,
              "name"
            )
          }
        />
      </div>
      <div className="form-group">
        <label>Type: {props.propIndex}</label>
        <select
          className="form-control form-control-sm"
          id={"type"}
          value={props.func[props.funcIndex].properties[props.propIndex].type}
          onChange={(e) =>
            props.updateParamProps(
              e.target.value,
              props.funcIndex,
              props.propIndex,
              "type"
            )
          }
        >
          <option value="string">string</option>
          <option value="int">int</option>
        </select>
      </div>
      <div className="form-group">
        <label>Enum: {props.propIndex}</label>
        <input
          className="form-control form-control-sm"
          id={"enum"}
          value={props.func[props.funcIndex].properties[props.propIndex].enum}
          onChange={(e) =>
            props.updateParamProps(
              e.target.value,
              props.funcIndex,
              props.propIndex,
              "enum"
            )
          }
        />
      </div>
      <div className="form-group">
        <label>Description: {props.propIndex}</label>
        <input
          className="form-control form-control-sm"
          id={"desc"}
          value={props.func[props.funcIndex].properties[props.propIndex].desc}
          onChange={(e) =>
            props.updateParamProps(
              e.target.value,
              props.funcIndex,
              props.propIndex,
              "desc"
            )
          }
        />
      </div>
    </>
  );
};

export default PropertiesGenerator;
