import React, { FC } from 'react';

interface SubmitButtonProps {
  buttonText: string;
  isLoading: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ buttonText, isLoading }) => (
  <button type="submit" disabled={isLoading}>
    {isLoading ? 'Loading...' : buttonText}
  </button>
);
