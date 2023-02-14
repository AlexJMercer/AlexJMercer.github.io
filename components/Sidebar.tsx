import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Moon, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const items = [
    {
      title: "About Me",
      imageUrl: "https://i.imgur.com/rkCtudG.jpg",
      route: "/about",
    },
    {
      title: "Techs and Experiences",
      imageUrl: "/images/blklight-thumb.jpg",
      route: "/skills",
    },
    {
      title: "Projects",
      imageUrl: "/images/ultimate-mercer-thumb.jpg",
      route: "/projects",
    },
  ];

  return (
    <div
      className={`flex justify-between md:flex-col md:self-start sticky top-0 md:bg-transparent dark:bg-dark-500 bg-light-500 shrink z-[100] md:h-screen md:min-h-screen h-20 md:w-20 w-full md:border-r md:border-gray`}
    >
      <nav className="md:h-full grow">
        <div className="md:h-full">
          <div className="flex grow justify-between md:flex-col flex-row md:h-screen">
            <div className="flex md:flex-col items-center text-center md:py-8 md:px-0 px-4">
              <Link href="/">
                <img
                  src="/images/ultimate-logo-red.svg"
                  className="mx-auto md:mb-6 hidden dark:block"
                  width="50"
                  height="50"
                  alt="Ultimate Mercer Logo"
                />
              </Link>

              <Link href="/">
                <img
                  src="/images/ultimate-logo-dark.svg"
                  className="mx-auto md:mb-6 block dark:hidden"
                  width="50"
                  height="50"
                  alt="Ultimate Mercer Logo"
                />
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="md:ml-0 ml-6"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setTheme(currentTheme === "dark" ? "light" : "dark")
                    }
                  >
                    {mounted && (
                      <>
                        <SunMedium className="hidden dark:block" />
                        <Moon className="block dark:hidden" />
                      </>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent align="center" side="right">
                  <p className="hidden dark:block">Modo claro</p>
                  <p className="block dark:hidden">Modo escuro</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="md:block flex gap-4">
              {items.map((item) => (
                <div
                  key={item.title}
                  className={`p-3 md:px-0 cursor-pointer hover:hover-button hover:bg-uv-500 hover:dark:bg-neon-yellow-500${
                    router.pathname === item.route
                      ? "bg-uv-500 dark:bg-neon-yellow-500"
                      : ""
                  }`}
                >
                  <Link href={item.route}>
                    <Image
                      src={item.imageUrl}
                      className={`w-14 h-14 object-cover rounded-full border mx-auto border-dark hover:rounded-2xl transition-transform ease-in-out  ${
                        router.pathname === item.route ? "!rounded-2xl" : ""
                      }`}
                      width={60}
                      height={60}
                      alt="Item"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="md:block flex items-center md:px-0 px-3 pb-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="md:mx-auto md:block mr-4"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setTheme(currentTheme === "dark" ? "light" : "dark")
                    }
                  >
                    {mounted && (
                      <>
                        <SunMedium className="hidden dark:block" />
                        <Moon className="block dark:hidden" />
                      </>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent align="center" side="right">
                  <p className="hidden dark:block">Modo claro</p>
                  <p className="block dark:hidden">Modo escuro</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
