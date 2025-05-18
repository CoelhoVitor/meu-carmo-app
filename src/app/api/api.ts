/* eslint-disable @typescript-eslint/no-unused-vars */
import type { User, Session } from "./../../../node_modules/@prisma";

export function generateSessionToken(): string {
  // TODO
  return "TODO";
}

export async function createSession(token: string, userId: number): Promise<Session> {
  // TODO
  return {} as Session;
}

export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
  // TODO
  return { session: null, user: null };
}

export async function invalidateSession(sessionId: string): Promise<void> {
  // TODO
  return;
}

export async function invalidateAllSessions(userId: number): Promise<void> {
  // TODO
  return;
}

export type SessionValidationResult =
  | { session: Session; user: User }
  | { session: null; user: null };