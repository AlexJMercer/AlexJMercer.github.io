"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { DialogProps } from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { FileIcon, LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { Article } from "@phosphor-icons/react";

import { getDocuments } from "services";

interface ICommandMenu {
  documents?: any;
  props?: DialogProps;
}

const CommandMenu = ({ ...props }: DialogProps) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  const [docs, setDocs] = React.useState<any[]>([]);

  const routes = [
    {
      name: "Sobre",
      href: "/about",
    },
    {
      name: "Experiências",
      href: "/experiences",
    },
    {
      name: "Projetos",
      href: "/projects",
    },
  ];

  React.useEffect(() => {
    const data = async () => {
      const docs = await getDocuments();
      setDocs(docs);
    };

    data();

    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-96 lg:max-w-[500px]"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Pesquisar...</span>
        <span className="inline-flex lg:hidden">Pesquisar...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite algo..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Links">
            {routes.map((route) => (
              <CommandItem
                key={route.href}
                value={route.name}
                className="cursor-pointer"
                onSelect={() => {
                  runCommand(() => router.push(route.href as string));
                }}
                aria-label={`Acessar ${route.name}`}
                title={`Acessar ${route.name}`}
              >
                <FileIcon className="mr-2 h-4 w-4" />
                {route.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Temas">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Projetos">
            {docs &&
              docs.length > 0 &&
              docs.map((doc: any) => (
                <CommandItem
                  key={doc.document.slug}
                  value={doc.document.title}
                  className="cursor-pointer"
                  onSelect={() => {
                    runCommand(() => router.push(doc.document.slug as string));
                  }}
                  aria-label={`Acessar projeto`}
                >
                  <Article className="mr-2 h-4 w-4" />
                  {doc.document.title}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
