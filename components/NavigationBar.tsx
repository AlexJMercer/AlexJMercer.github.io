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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavigationBar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  return (
    <header className="flex justify-between items-center px-5 sticky top-0 dark:bg-dark-500 bg-light-500 shrink z-[100] h-16 w-full border-b border-b-dark-200 dark:border-b-light-800">
      <nav className="grow">
        <div className="">
          <div className="flex grow items-center justify-between flex-row">
            <div className="flex items-center">
              <div className="mr-6">
                <Link href="/">
                  <img
                    src="/images/ultimate-logo-red.svg"
                    className="mx-auto hidden dark:block"
                    width="56"
                    height="56"
                    alt="Ultimate Mercer Logo"
                  />
                </Link>

                <Link href="/">
                  <img
                    src="/images/ultimate-logo-dark.svg"
                    className="mx-auto block dark:hidden"
                    width="56"
                    height="56"
                    alt="Ultimate Mercer Logo"
                  />
                </Link>
              </div>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 grid-cols-1">
                        <li>
                          <Link href="/about" passHref>
                            <NavigationMenuLink asChild>
                              <div className="flex items-center p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800">
                                <img
                                  src="https://i.imgur.com/rkCtudG.jpg"
                                  className="w-12 h-12 object-fit rounded-lg lg:block hidden"
                                  alt=""
                                />
                                <p className="lg:ml-4 text-xl font-semibold tracking-wide leading-normal">
                                  Sobre Mim
                                </p>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="/skills" passHref>
                            <NavigationMenuLink asChild>
                              <div className="flex items-center p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800">
                                <img
                                  src="/images/ultimate-mercer-pro-thumb.jpg"
                                  className="w-12 h-12 object-fit rounded-lg lg:block hidden"
                                  alt=""
                                />
                                <p className="lg:ml-4 text-xl font-semibold tracking-wide leading-normal">
                                  Conhecimento
                                </p>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <Link href="/ultimate-series" passHref>
                            <NavigationMenuLink asChild>
                              <div className="card hover:ring-1 ring-dark-200 dark:ring-light-800 transition-all view-anchor !my-0">
                                <img
                                  src="https://i.imgur.com/qOEajoe.jpg"
                                  className="rounded-lg w-full md:h-80 h-48 scale-125 object-cover"
                                  alt=""
                                />
                                <div className="mask bg-dark-500/[.4]"></div>
                                <Link
                                  href="/ultimate-series"
                                  className="card-img-overlay flex flex-col justify-end"
                                >
                                  <div className="mt-auto md:text-2xl text-lg font-bold text-white tracking-wider leading-normal">
                                    Ultimate Series
                                  </div>
                                </Link>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <div className="px-1">
                          <li>
                            <Link href="/dev" passHref>
                              <NavigationMenuLink asChild>
                                <div className="block py-2 px-3 mb-2 rounded-md hover:bg-white dark:hover:bg-slate-800">
                                  <h4 className="text-lg font-semibold tracking-wider leading-normal">
                                    Projetos - Dev
                                  </h4>
                                  <p className="text-base leading-snug text-slate-600 dark:text-slate-400">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                          <li>
                            <Link href="/arts" passHref>
                              <NavigationMenuLink asChild>
                                <div className="block py-2 px-3 mb-2 rounded-md hover:bg-white dark:hover:bg-slate-800">
                                  <h4 className="text-lg font-semibold tracking-wider leading-normal">
                                    Projetos - Arts
                                  </h4>
                                  <p className="text-base leading-snug text-slate-600 dark:text-slate-400">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="block px-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="ml-6"
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
                <TooltipContent align="center" side="left">
                  <p className="hidden dark:block">Modo claro</p>
                  <p className="block dark:hidden">Modo escuro</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
