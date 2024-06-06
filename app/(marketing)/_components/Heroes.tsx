import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flext flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]">
          <Image
            src={"/reading.svg"}
            fill
            alt="task"
            className="object-contain dark:hidden"
          />

          <Image
            src={"/reading-dark.svg"}
            fill
            alt="task"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative h-[350px] w-[350px] hidden md:block">
          <Image
            src={"/task.svg"}
            fill
            alt="reading"
            className="object-contain dark:hidden"
          />

          <Image
            src={"/task-dark.svg"}
            fill
            alt="reading"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};
