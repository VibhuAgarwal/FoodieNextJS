import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">To Meals page</Link>
      </p>
      <p>
        <Link href="/meals/share">To Meals share Page</Link>
      </p>
      <p>
        <Link href="/community">To Community</Link>
      </p>
    </main>
  );
}
