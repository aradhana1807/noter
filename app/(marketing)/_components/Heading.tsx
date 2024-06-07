"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { Spinnaker } from "next/font/google";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Noter</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Noter is the connected workspace where <br />
        better, more organized, and efficient work happens.
      </h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Noter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Noter Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
