import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <div className="checkbox-block">
      <input id={label} type="checkbox" {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default Checkbox;
