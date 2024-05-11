import { PayNowButton } from "../ui/payment/payment-button";

export default function Payment() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>
          This is payment page.
        </h1>
        <PayNowButton />
      </div>
    </main>
  );
}
