import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();

  // Aquí se simula el envío de un correo de restablecimiento de contraseña.
  return NextResponse.json({ message: 'Password reset link sent' });
}
