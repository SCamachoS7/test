import { useRouter } from 'next/navigation';

interface AuthFetchProps {
  endpoint: string;
  formData: any;
  redirectRoute?: string;
}

export const useAuthFetch = () => {
  const router = useRouter();

  return async ({ endpoint, formData, redirectRoute }: AuthFetchProps) => {
    let url = '';

    // Configura las URL según el endpoint
    if (endpoint === 'register') {
      url = 'https://api.yampi.co/register/email';
    } else if (endpoint === 'login') {
      url = '/api/auth/login'; // Supongamos que el login sigue siendo interno
    } else if (endpoint === 'forgot-password') {
      url = '/api/auth/forgot-password'; // Supongamos que este endpoint sigue siendo interno
    } else if (endpoint === 'reset-password') {
      url = '/api/auth/reset-password'; // Supongamos que este endpoint sigue siendo interno
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.json();
      if (redirectRoute) {
        router.push(redirectRoute);
      }
      return data;
    } else {
      const error = await res.json();
      throw new Error(error.message || 'Something went wrong');
    }
  };
};
