import React from "react";

const FormGroup = ({
  className,
  ID,
  Label,
  Type,
  inputClassName,
  Placeholder,
  Value,
  onChange,
  Desc
}) => {
  return (
    <div className={"form-group" + (className ? " " + className : "")}>
      <label htmlFor={ID}>{Label}</label>
      <input
        type={Type}
        className={
          "form-control" + (inputClassName ? " " + inputClassName : "")
        }
        id={ID}
        name={ID}
        placeholder={Placeholder}
        value={Value}
        onChange={onChange}
        aria-describedby={Desc ? ID + "Help" : null}
      />
      {Desc && (
        <small id={ID + "Help"} className="form-text text-muted">
          {Desc}
        </small>
      )}
    </div>
  );
};

export default FormGroup;
