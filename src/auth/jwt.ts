import { SignJWT } from 'jose';

export async function generateSuperSignJWT(): Promise<string> {
  const secret = process.env.SUPERSIGN_JWT_SECRET;
  if (!secret) {
    throw new Error('SUPERSIGN_JWT_SECRET não está definido');
  }

  const key = new TextEncoder().encode(secret);

  const jwt = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key);

  return jwt;
}
