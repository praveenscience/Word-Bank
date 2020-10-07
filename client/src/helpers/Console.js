import React from "react";

const Console = ({ className, data }) => {
  return (
    <pre
      className={
        "border bg-light rounded p-2" + (className ? " " + className : "")
      }
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default Console;
