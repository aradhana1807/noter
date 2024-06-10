"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty.svg"}
        height="300"
        width="300"
        alt="empty"
        className="dark:hidden"
      />

      <Image
        src={"/empty-dark.svg"}
        height="300"
        width="300"
        alt="empty"
        className="hidden"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Noter
      </h2>

      <Button>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
