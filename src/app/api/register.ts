import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password, confirmPassword } = await req.json();

  if (password !== confirmPassword) {
    return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
  }

  // Aquí se simula el registro, en un caso real debes guardar el usuario en una base de datos.
  return NextResponse.json({ message: 'User registered successfully' });
}
