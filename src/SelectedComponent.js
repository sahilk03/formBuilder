import React from "react";

export default function SelectedComponent(props) {
  let array = [];
  const { selectedList } = props;

  function onclick(e, label) {
    let checkbox = document.getElementById(label);
    checkbox.click();
  }
  for (let key in selectedList) {
    array.push(
      <React.Fragment key={key}>
        <div className="mainLabel">{key}</div>
        <div>
          {selectedList[key].map((label) => (
            <div className="input-group mb-3" key={label}>
              <input
                type="email"
                className="form-control"
                placeholder={label}
                disabled
                style={{ borderRight: "0px" }}
              />
              <div
                className="input-group-prepend"
                style={{ borderLeft: "0px" }}
              >
                <span
                  className="input-group-text"
                  style={{ borderLeft: "0px" }}
                  onClick={(e) => onclick(e, label)}
                >
                  X
                </span>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {Object.keys(selectedList).length > 0 && array}
      {Object.keys(selectedList).length == 0 && (
        <div className="nocontent">No Value Selected</div>
      )}
    </React.Fragment>
  );
}
