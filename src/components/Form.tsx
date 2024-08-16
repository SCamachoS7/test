import React, { FC } from 'react';

interface FormProps {
  title: string;
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  description?: string;
}

export const Form: FC<FormProps> = ({ title, onSubmit, children, description }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </form>
  );
};
