"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 dark:bg-[#1f1f1f]">
      <Image
        src="/error.svg"
        height="404"
        width="404"
        alt="error"
        className="dark:hidden"
      />

      <Image
        src="/error-dark.svg"
        height="404"
        width="404"
        alt="error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild >
        <Link href="/documents">Go Back</Link>
      </Button>
    </div>
  );
};

export default Error;
