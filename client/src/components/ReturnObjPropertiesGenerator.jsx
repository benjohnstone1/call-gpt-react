const ReturnObjPropertiesGenerator = (props) => {
  return (
    <>
      <div className="form-group">
        <label>PropName: {props.propIndex}</label>
        <input
          className="form-control form-control-sm"
          id={"name"}
          value={
            props.func[props.funcIndex].returnObjProperties[props.propIndex]
              .name
          }
          onChange={(e) =>
            props.updateObjectProps(
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
          value={
            props.func[props.funcIndex].returnObjProperties[props.propIndex]
              .type
          }
          onChange={(e) =>
            props.updateObjectProps(
              e.target.value,
              props.funcIndex,
              props.propIndex,
              "type"
            )
          }
        >
          <option value="String">String</option>
          <option value="Int">Int</option>
        </select>
      </div>
      <div className="form-group">
        <label>Description: {props.propIndex}</label>
        <input
          className="form-control form-control-sm"
          id={"desc"}
          value={
            props.func[props.funcIndex].returnObjProperties[props.propIndex]
              .desc
          }
          onChange={(e) =>
            props.updateObjectProps(
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

export default ReturnObjPropertiesGenerator;
