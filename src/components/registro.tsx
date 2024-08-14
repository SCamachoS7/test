// components/Login.tsx
'use client';
// components/Login.tsx
import { useState, FormEvent } from 'react';



const Registro: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');

  const handleRegistro = async (e: FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página

    // Resto del código...

    // Crear objeto JSON con los datos del formulario
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
      // Realizar la petición POST a la API usando fetch
      const response = await fetch('https://api.yampi.co/register/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(RegistroData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log('Login exitoso', data);
      // Redireccionar o realizar alguna acción en caso de login exitoso
    } catch (error) {
      console.error('Error en el login', error);
      setError(
        'Error al registrarse. Por favor, revisa tus credenciales.'
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Registrarse
        </h2>
        <form onSubmit={handleRegistro}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required

            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required

            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;