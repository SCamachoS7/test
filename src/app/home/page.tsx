import { useAuth } from '@/hooks/UseAuthContext';

export default function HomePage() {
  const { email, name, lastname, token, password } = useAuth();

  return (
    <div>
      <h1>Bienvenido, {name} {lastname}</h1>
      <p>Email: {email}</p>
      <p>Token: {token}</p>
      <p>Contraseña: {password}</p> {/* Este dato debe ser manejado con cuidado */}
    </div>
  );
}
