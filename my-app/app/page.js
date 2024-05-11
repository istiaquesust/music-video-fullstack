import Link from "next/link";
import Navbar from "./components/nav-bar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-4">

      <div className="mt-20 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
      <h1>This home page</h1>
      </div>
    </main>
    </>
  );
}
