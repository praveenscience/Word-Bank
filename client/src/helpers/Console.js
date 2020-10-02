import React from "react";

const Console = ({ data }) => {
  return (
    <pre className="border bg-light rounded p-2 m-3">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default Console;
