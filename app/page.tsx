import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";

import { Metadata } from "next";
import HeavyComponent from "./components/HeavyComponent";
import { authOptions } from "./api/auth/authOptions";
import { Span } from "next/dist/trace";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <HeavyComponent />
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }
