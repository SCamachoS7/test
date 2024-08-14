// components/Login.tsx
'use client';
import { useState, FormEvent } from 'react';

const Registro: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegistro = async (e: FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página

    // Validar la contraseña
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos un carácter especial, una letra mayúscula o minúscula, y un número.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const RegistroData = {
      email: email,
      password: password,
      profile: {
        name: nombre,
        lastname: apellido,
        country_id: 2,
      }
    };

    try {
      const response = await fetch('https://api.yampi.co/register/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(RegistroData),
      });

      if (response.status === 409) { // Suponiendo que 409 es el código para "Conflict"
        setError('El correo ya está registrado en la base de datos.');
        return;
      }

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log('Registro exitoso', data);
    } catch (error) {
      console.error('Error en el registro', error);
      setError('Error al registrarse. Por favor, revisa tus credenciales.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-pink-500">
          Registrarse
        </h2>
        <form onSubmit={handleRegistro}>
          <div className="mb-4">
            <label className="block text-pink-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-pink-500 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-pink-500">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-pink-500 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-pink-500"
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-pink-500">Confirmar Contraseña</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-pink-500 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-pink-500"
              >
                {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-pink-500">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-pink-500 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-pink-500">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-pink-500 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
