import React, { createContext, useContext, useState, useEffect, FC } from 'react';

interface AuthContextType {
  email: string;
  name: string;
  lastname: string;
  token: string;
  password: string;
  setAuthData: (data: Partial<AuthContextType>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');

  const setAuthData = (data: Partial<AuthContextType>) => {
    if (data.email) setEmail(data.email);
    if (data.name) setName(data.name);
    if (data.lastname) setLastname(data.lastname);
    if (data.token) setToken(data.token);
    if (data.password) setPassword(data.password);

    // Guardar en localStorage
    localStorage.setItem('authData', JSON.stringify({ email, name, lastname, token, password }));
  };

  useEffect(() => {
    // Recuperar datos de localStorage al cargar
    const storedData = localStorage.getItem('authData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAuthData(parsedData);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ email, name, lastname, token, password, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
