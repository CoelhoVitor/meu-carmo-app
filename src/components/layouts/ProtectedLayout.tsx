import { redirect } from "next/navigation";
import { getAuth } from "@/auth/cookie";
import Nav from "@/components/Nav";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await getAuth();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
