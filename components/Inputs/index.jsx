import React from "react";
import { InputWrapper } from "./styles";
import {useField} from "formik";


const CustomInput = ({...props}) => {
  const [field] = useField(props)
  return (
    <InputWrapper>
      <div className="input-container">
        {props.label && <label htmlFor="">{props.label}</label>}
        <div className="field">
          <input placeholder={props.placeholder} className="input" {...field} {...props} />
        </div>
      </div>
    </InputWrapper>
  );
};

export default CustomInput
