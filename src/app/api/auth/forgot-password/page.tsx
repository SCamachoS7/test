import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { SubmitButton } from '@/components/SubmitButton';
import { useAuthFetch } from '@/hooks/UseAuthFetch';
import { useLoading } from '@/hooks/UseLoading';

export default function ResetPasswordPage() {
  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();

  const handleResetPassword = async (formData: any) => {
    startLoading();
    await authFetch({ endpoint: 'reset-password', formData });
    finishLoading();
  };

  return (
    <Form title="Cambiar Contraseña" onSubmit={handleResetPassword}>
      <Input label="Nueva Contraseña" name="newPassword" type="password" placeholder="Ingresa tu nueva contraseña..." />
      <SubmitButton buttonText="Cambiar Contraseña" isLoading={isLoading} />
    </Form>
  );
}
