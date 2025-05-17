"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export const NextAuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="light" 
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};
