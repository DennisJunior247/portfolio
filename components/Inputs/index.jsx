import React from "react";
import { InputWrapper, TextAreaWraaper } from "./styles";

export const CustomInput = ({
  name,
  type,
  label,
  placeholder,
  onChange,
  ...otherProps
}) => {
  return (
    <InputWrapper>
      <div className="input-container">
        {label && <label htmlFor="">{label}</label>}
        <div className="field">
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className="input"
            onChange={onChange}
            {...otherProps}
          />
        </div>
      </div>
    </InputWrapper>
  );
};

export const TextArea = ({ rows, cols, placeholder, ...otherProps}) => {
  return (
    <TextAreaWraaper>
      <textarea
        autoCapitalize
        className={"text-area"}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        otherProps={otherProps}
      />
    </TextAreaWraaper>
  );
};
