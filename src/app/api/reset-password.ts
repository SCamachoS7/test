import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { token, newPassword } = await req.json();

  // Aquí se simula la actualización de la contraseña.
  return NextResponse.json({ message: 'Password has been reset' });
}
