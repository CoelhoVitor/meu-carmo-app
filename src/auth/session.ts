const SESSION_REFRESH_INTERVAL_MS = 1000 * 60 * 60 * 24 * 15; // 15 days
const SESSION_MAX_DURATION_MS = SESSION_REFRESH_INTERVAL_MS * 2;  // 30 days

export const generateRandomSessionToken = () => {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

export const createSession = async (sessionToken: string, userId: number) => {
  return {
    id: sessionToken,
    userId,
    expiresAt: new Date(Date.now() + SESSION_MAX_DURATION_MS),
  };
};

export const validateSession = async (_sessionToken: string) => {
  return { session: null, user: null };
};

export const invalidateSession = async (_sessionId: string) => {
  return;
};
