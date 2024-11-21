import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Project Home Page.</h1>
      <p className="text-lg text-center">
        you can see this hatta kan makch authentifié
      </p>
      <Link href="/login">
        <p className="text-blue-500">Login</p>
      </Link>
      {/* tseting if next ui works : */}
      <Button auto>test</Button>
    </main>
  );
}
