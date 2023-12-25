import { getServerSession } from "next-auth";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

import { authOptions } from "./api/auth/authOptions";
import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello World</h1>
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
