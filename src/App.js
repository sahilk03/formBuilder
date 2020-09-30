import React, { useState } from "react";
import "./App.css";
import Checkboxwithlabel from "./Checkboxwithlabel";
import SelectedComponent from "./SelectedComponent";
function App() {
  const [selectedList, setSelectedList] = useState({});
  function onChange(event, label, mainLabel) {
    if (event.target.checked) {
      setSelectedList((prevState) => {
        if (prevState[mainLabel]) {
          return {
            ...prevState,
            [mainLabel]: [...prevState[mainLabel], label],
          };
        } else {
          return { ...prevState, [mainLabel]: [label] };
        }
      });
    } else {
      setSelectedList((prevState) => {
        debugger;
        if (prevState[mainLabel]) {
          let tempArr = [...prevState[mainLabel]].filter((l) => l != label);
          if (tempArr.length < 1) {
            let result = { ...prevState };
            delete result[mainLabel];
            return result;
          }
          return {
            ...prevState,
            [mainLabel]: tempArr,
          };
        }
      });
    }
  }
  return (
    <div className="maincontainer">
      <div className="innercontainer">
        <div className="card">
          <div className="form-check" key="Portugal">
            <div className="mainLabel">Portugal</div>
            {[
              "Aasiya Jayavant",
              "Luvleen Lawrence",
              "Rey Mibourne",
              "Cayla Brister",
            ].map((label) => (
              <Checkboxwithlabel
                mainLabel={"Portugal"}
                label={label}
                onChange={onChange}
                key={label}
              />
            ))}
          </div>
          <div className="form-check" key="Nicaragua">
            <div className="mainLabel">Nicaragua</div>
            {[
              "Deveedaas Nandi",
              "Obasey Chidy",
              "Xenie Dolezelova",
              "Ezequiel Dengra",
            ].map((label) => (
              <Checkboxwithlabel
                mainLabel={"Nicaragua"}
                label={label}
                onChange={onChange}
                key={label}
              />
            ))}
          </div>
          <div className="form-check" key="Marshall">
            <div className="mainLabel">Marshall Islands</div>
            {["Aaron Almaraz", "Jelena Denisova"].map((label) => (
              <Checkboxwithlabel
                mainLabel={"Marshall Islands"}
                label={label}
                onChange={onChange}
                key={label}
              />
            ))}
          </div>
        </div>
        <div className="card">
          <SelectedComponent selectedList={selectedList} />
        </div>
      </div>
    </div>
  );
}

export default App;
