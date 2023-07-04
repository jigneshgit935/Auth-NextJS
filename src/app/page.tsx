import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-[100vh]">
      <div>
        <Link href="/profile" className="">
          <h3>Go to profile Page</h3>
        </Link>
      </div>
    </main>
  );
}
