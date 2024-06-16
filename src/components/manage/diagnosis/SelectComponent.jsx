import React from "react";

// components
import Creatable from "react-select/creatable";

export default function SelectComponent({ question, options, state, func }) {
  return (
    <div className="animate-slide-down">
      <p>{question}</p>
      <Creatable
        options={options}
        value={options.find((option) => option.value === state)}
        placeholder={"선택지에 없다면 입력해주세요."}
        onChange={(e) => {
          func(e.value);
        }}
        className="mt-2"
      />
    </div>
  );
}
