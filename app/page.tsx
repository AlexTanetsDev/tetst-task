import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className=" text-orange-600 font-bold text-3xl">
        Welcome to the our awesome E-Market!!
      </h1>
      <Link
        href="/bucket"
        className=" mt-4 w-40 text-slate-50 p-1 text-center rounded-3xl bg-slate-500 cursor-pointer font-medium"
      >
        Go to bucket
      </Link>
    </main>
  );
}
