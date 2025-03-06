import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>This is NextJs landing page</h1>
      <Link href="/user" className="underline underline-offset-1">
        server side
      </Link>
      <Link href="/todo" className="underline underline-offset-1">
        client side
      </Link>
      <Link href="/clinic" className="underline underline-offset-1">
        Clinic(data fetching, search, pagination, debouncing)
      </Link>
      <Link href="/gallary" className="underline underline-offset-1">
        Image gallary
      </Link>
      <Link href="/ssg" className="underline underline-offset-1">
        Static Site Generation
      </Link>
      <Link href="/isr" className="underline underline-offset-1">
        incremental Static Regeneration (ISR)
      </Link>
    </div>
  );
}
