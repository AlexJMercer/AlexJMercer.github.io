"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import CommandMenu from "./command-menu";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { Button } from "./ui/button";
import { CaretLeft } from "@phosphor-icons/react";

const NavHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const route = useRouter();
  const segment = useSelectedLayoutSegments();
  return (
    <div className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backgrop-filter]:bg-background/60 print:hidden">
      <div className="flex h-16 justify-between items-center px-4 w-">
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <div className="inline-flex mr-4">
            <Link href="/" className="">
              <img
                src="/images/ultimate-logo-red.svg"
                className="!max-w-none mx-auto w-[56px] h-[56px] hidden dark:block"
                width="56"
                height="56"
                alt="Ultimate Mercer Logo"
              />
            </Link>

            <Link href="/">
              <img
                src="/images/ultimate-logo-dark.svg"
                className="!max-w-none mx-auto w-[56px] h-[56px] block dark:hidden"
                width="56"
                height="56"
                alt="Ultimate Mercer Logo"
              />
            </Link>
          </div>
          {segment && segment.length > 1 && (
            <Button
              variant={"link"}
              onClick={() => route.back()}
              aria-label="Voltar a página anterior"
            >
              <CaretLeft size={24} />
              Voltar
            </Button>
          )}
        </nav>
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <div className="ml-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
