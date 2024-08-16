import React, { FC } from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ label, name, type = 'text', placeholder }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type={type} placeholder={placeholder} required />
  </div>
);

