import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Aquí se simula la autenticación, en un caso real debes validar con una base de datos.
  if (email === 'user@example.com' && password === 'password123') {
    return NextResponse.json({ token: 'fake-jwt-token' });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
