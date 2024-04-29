import Link from "next/link";

export default function CommunityPage() {
    return (
        <main>
            <h1>Community Page</h1>
            <p><Link href='/'>To Home</Link></p>
            <p><Link href='/meals'>To Meals page</Link></p>
            <p><Link href='/meals/share'>To Meals share Page</Link></p>
        </main>
    );
}