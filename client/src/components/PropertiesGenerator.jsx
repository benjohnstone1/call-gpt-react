import { useState } from "react";

const PropertiesGenerator = (props) => {
  const initialProperties = [
    {
      name: "language",
      type: "String",
      desc: "The types of languages the user could want to converse in",
    },
    {
      name: "prop1",
      type: "String",
      desc: "prop1 desc",
    },
  ];

  const [propData, setPropData] = useState(initialProperties);

  const setSampleProps = () => {
    alert("tbd");
  };

  return (
    <>
      <button className="btn btn-secondary" onClick={setSampleProps}>
        Set Sample Properties
      </button>
      <div className="form-group">
        <label>PropName - {props.number}</label>
        <input
          className="form-control form-control-sm"
          id={propData[props.number]?.name}
          value={propData[props.number]?.name}
          onChange={(e) =>
            setPropData({ ...propData[props.number], name: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label>Type - {props.number}</label>
        <select
          className="form-control form-control-sm"
          id={propData[props.number]?.type}
          value={propData[props.number]?.type}
          onChange={(e) =>
            setPropData({ ...propData[[props.number]], type: e.target.value })
          }
        >
          <option value="String">String</option>
          <option value="Int">Int</option>
        </select>
      </div>
      <div className="form-group">
        <label>Description - {props.number}</label>
        <input
          className="form-control form-control-sm"
          id={propData[props.number]?.desc}
          value={propData[props.number]?.desc}
          onChange={(e) =>
            setPropData({ ...propData[props.number], desc: e.target.value })
          }
        />
      </div>
    </>
  );
};

export default PropertiesGenerator;
