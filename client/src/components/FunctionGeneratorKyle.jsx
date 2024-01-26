// import { useState } from "react";

// const FunctionContext = (props) => {
//   const [func, setFunc] = useState([]);
//   const [funcName, setFuncName] = useState("");
//   const [funcDesc, setFuncDesc] = useState("");
//   const [prop, setProp] = useState([]);
//   const [propName, setPropName] = useState("");
//   const [propType, setPropType] = useState("");
//   const [propDesc, setPropDesc] = useState("");
//   const [retObj, setRetObj] = useState([]);
//   const [retObjName, setRetObjName] = useState("");
//   const [retObjType, setRetObjType] = useState("");
//   const [retObjDesc, setRetObjDesc] = useState("");

//   const addFunctionInput = () => {
//     setFunc([
//       ...func,
//       {
//         name: "",
//         description: "",
//         properties: [],
//         returnObject: [],
//       },
//     ]);
//   };

//   const handleFunctionChange = (i) => (e) => {
//     let newFunc = [...func];
//     newFunc[i][e.target.name] = e.target.value;
//     setFunc(newFunc);
//   };

//   const addPropertiesInput = (i) => (e) => {
//     let newProp = {
//       name: "",
//       type: "",
//       description: "",
//     };
//     let newFunc = [...func];
//     newFunc[i].properties = [...func[i].properties, newProp];
//     setFunc(newFunc);
//   };

//   const handlePropertyChange = (i, p) => (e) => {
//     let newFunc = [...func];
//     newFunc[i]["properties"][p][e.target.name] = e.target.value;
//     setFunc(newFunc);
//   };

//   const addReturnObjectInput = (i) => (e) => {
//     let newRetObj = {
//       name: "",
//       type: "",
//       description: "",
//     };
//     let newFunc = [...func];
//     newFunc[i].returnObject = [...func[i].returnObject, newRetObj];
//     setFunc(newFunc);
//   };

//   const handleReturnObjectChange = (i, r) => (e) => {
//     let newFunc = [...func];
//     newFunc[i]["properties"][r][e.target.name] = e.target.value;
//     setFunc(newFunc);
//   };

//   return (
//     <div>
//       {" "}
//       <div className="form-group">
//         <b>
//           <label htmlFor="functionList">List of Functions</label>
//         </b>
//         <div>
//           <button onClick={() => addFunctionInput()}>+</button>
//           {func.map((item, i) => {
//             let FunctionName = "function" + i;
//             return (
//               <div className={FunctionName}>
//                 <label htmlFor={FunctionName}>
//                   &nbsp;&nbsp;&nbsp;Function {i}
//                 </label>
//                 <br />
//                 <label htmlFor={FunctionName + "Name"}>
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Function Name:
//                 </label>
//                 <input
//                   //   onChange={handleFunctionChange(i)}
//                   value={funcName}
//                   onChange={(e) => setFuncName(e.target.value)}
//                   name="name"
//                   id={FunctionName + "Name"}
//                   type={item.type}
//                   size="40"
//                 />
//                 <br />
//                 <label htmlFor={FunctionName + "Desc"}>
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Function Description:
//                 </label>
//                 <input
//                   onChange={handleFunctionChange(i)}
//                   value={item.value}
//                   name="description"
//                   id={FunctionName + "Desc"}
//                   type={item.type}
//                   size="40"
//                 />
//                 <br />
//                 <b>
//                   <label htmlFor={FunctionName + "PropertyList"}>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List of Properties
//                   </label>
//                 </b>
//                 <button onClick={addPropertiesInput(i)}>+</button>
//                 {func.map((item, p) => {
//                   let PropName = FunctionName + "Property" + p;
//                   return (
//                     <div className={PropName}>
//                       <label htmlFor={PropName}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Property{" "}
//                         {p}
//                       </label>
//                       <br />
//                       <label htmlFor={PropName + "Name"}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Property
//                         Name:
//                       </label>
//                       <input
//                         onChange={handlePropertyChange(i, p)}
//                         value={item.value}
//                         name="name"
//                         id={PropName + "Name"}
//                         type={item.type}
//                         size="40"
//                       />
//                       <br />
//                       <label htmlFor={PropName + "Type"}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Property
//                         Type:
//                       </label>
//                       <select
//                         defaultValue="blank"
//                         id={PropName + "Type"}
//                         name="type"
//                         onChange={handlePropertyChange(i, p)}
//                       >
//                         <option
//                           data-system-context-template=""
//                           value="blank"
//                         ></option>
//                         <option
//                           data-system-context-template="String"
//                           value="String"
//                         >
//                           String
//                         </option>
//                         <option
//                           data-system-context-template="Integer"
//                           value="Integer"
//                         >
//                           Integer
//                         </option>
//                       </select>
//                       <br />
//                       <label htmlFor={PropName + "Desc"}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Property
//                         Description:
//                       </label>
//                       <input
//                         onChange={handlePropertyChange(i, p)}
//                         value={item.value}
//                         name="description"
//                         id={PropName + "Name"}
//                         type={item.type}
//                         size="40"
//                       />
//                     </div>
//                   );
//                 })}
//                 <br />
//                 <b>
//                   <label htmlFor={FunctionName + "ReturnObj"}>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List of Return Objects
//                   </label>
//                 </b>
//                 <button onClick={addReturnObjectInput(i)}>+</button>
//                 {func.map((item, r) => {
//                   let RetObjName = FunctionName + "RetObj" + r;
//                   return (
//                     <div className={RetObjName}>
//                       <label htmlFor={RetObjName}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return
//                         Object {r}
//                       </label>
//                       <br />
//                       <label htmlFor={RetObjName + "Name"}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return
//                         Object Name:
//                       </label>
//                       <input
//                         onChange={handleReturnObjectChange(i, r)}
//                         value={item.value}
//                         name="name"
//                         id={RetObjName + "Nam"}
//                         type={item.type}
//                         size="40"
//                       />
//                       <br />
//                       <label htmlFor={RetObjName + "Type"}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return
//                         Object Type:
//                       </label>
//                       <select
//                         defaultValue="blank"
//                         id={RetObjName + "Type"}
//                         name="type"
//                         onChange={handleReturnObjectChange(i, r)}
//                       >
//                         <option
//                           data-system-context-template=""
//                           value="blank"
//                         ></option>
//                         <option
//                           data-system-context-template="String"
//                           value="String"
//                         >
//                           String
//                         </option>
//                         <option
//                           data-system-context-template="Integer"
//                           value="Integer"
//                         >
//                           Integer
//                         </option>
//                       </select>
//                       <br />
//                       <label htmlFor={RetObjName + "Desc"}>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return
//                         Object Description:
//                       </label>
//                       <input
//                         onChange={handleReturnObjectChange(i, r)}
//                         value={item.value}
//                         name="description"
//                         id={RetObjName + "Name"}
//                         type={item.type}
//                         size="40"
//                       />
//                     </div>
//                   );
//                 })}
//                 <br />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FunctionContext;
