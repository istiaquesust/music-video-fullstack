import { SignupForm } from "@/app/auth/sign-up/ui/sign-up-form";
import Navbar from "@/app/components/nav-bar";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen py-40 font-mono text-sm">
        <div className="w-full">
          <SignupForm />
        </div>
      </main>
    </>
  );
}
