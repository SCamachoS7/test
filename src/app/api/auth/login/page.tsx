import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { SubmitButton } from '@/components/SubmitButton';
import { useAuthFetch } from '@/hooks/UseAuthFetch';
import { useLoading } from '@/hooks/UseLoading';

export default function LoginPage() {
  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();

  const handleLogin = async (formData: any) => {
    startLoading();
    await authFetch({ endpoint: 'login', formData });
    finishLoading();
  };

  return (
    <Form title="Inicia Sesión" onSubmit={handleLogin}>
      <Input label="Correo" name="email" placeholder="Ingresa tu correo..." />
      <Input label="Contraseña" name="password" type="password" placeholder="Ingresa tu contraseña..." />
      <SubmitButton buttonText="Iniciar Sesión" isLoading={isLoading} />
    </Form>
  );
}
