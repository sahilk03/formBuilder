import React from "react";

export default function Checkboxwithlabel(props) {
  const { label, mainLabel, onChange } = props;

  return (
    <div key={label} className="checkboxblock">
      <input
        type="checkbox"
        className="form-check-input checkbox"
        id={label}
        onChange={(e) => onChange(e, label, mainLabel)}
      />
      <label className="form-check-label" htmlFor={label} data-testid={label}>
        {label}
      </label>
    </div>
  );
}
