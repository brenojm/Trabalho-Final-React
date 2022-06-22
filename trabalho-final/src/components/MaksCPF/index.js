import React from "react";
import InputMask from "react-input-mask";

const InputCpf = ({ value, onChange }) => (
  <InputMask mask="999.999.999-99" value={value} onChange={onChange} />
);

export default InputCpf;
