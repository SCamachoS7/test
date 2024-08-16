import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { SubmitButton } from '@/components/SubmitButton';
import { useAuthFetch } from '@/hooks/UseAuthFetch';
import { useLoading } from '@/hooks/UseLoading';
import { useAuth } from '@/hooks/UseAuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();
  const { setAuthData } = useAuth();
  const router = useRouter();

  const handleRegister = async (formData: any) => {
    try {
      startLoading();
      const response = await authFetch({ endpoint: 'register', formData });
      
      setAuthData({
        email: formData.email as string,
        password: formData.password as string,
        token: response.token as string,
        name: 'NombreEjemplo', // Cambia esto si tienes el nombre real en la respuesta
        lastname: 'ApellidoEjemplo', // Cambia esto si tienes el apellido real en la respuesta
      });

      router.push('/home');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      finishLoading();
    }
  };

  return (
    <Form title="Regístrate" onSubmit={handleRegister}>
      <Input label="Correo" name="email" placeholder="Ingresa tu correo..." />
      <Input label="Contraseña" name="password" type="password" placeholder="Ingresa tu contraseña..." />
      <Input label="Confirmar Contraseña" name="confirmPassword" type="password" placeholder="Confirma tu contraseña..." />
      <SubmitButton buttonText="Crear Cuenta" isLoading={isLoading} />
    </Form>
  );
}
