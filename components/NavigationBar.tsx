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
    <header className="flex justify-between items-center px-5 sticky top-0 dark:bg-dark-500 bg-light-500 shrink z-[100] h-16 w-full border-b border-b-dark-200 dark:border-b-light-800 shadow-md">
      <nav className="grow">
        <div className="flex grow items-center justify-between flex-row">
          <div className="flex items-center">
            <div className="inline-flex mr-6">
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

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 grid-cols-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about">
                            <div className="flex items-center p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800">
                              <img
                                src="https://i.imgur.com/rkCtudG.jpg"
                                className="w-10 h-10 object-fit rounded-lg lg:block hidden"
                                alt=""
                              />
                              <p className="lg:ml-4 text-xl font-semibold tracking-wide leading-normal">
                                Sobre Mim
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/skills">
                            <div className="flex items-center p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800">
                              <img
                                src="/images/ultimate-mercer-pro-thumb.jpg"
                                className="w-10 h-10 object-fit rounded-lg lg:block hidden"
                                alt=""
                              />
                              <p className="lg:ml-4 text-xl font-semibold tracking-wide leading-normal">
                                Conhecimento
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a href="/ultimate-series">
                            <div className="card hover:ring-1 ring-dark-200 dark:ring-light-800 transition-all view-anchor !my-0">
                              <img
                                src="https://i.imgur.com/qOEajoe.jpg"
                                className="rounded-lg w-full md:h-80 h-48 object-cover"
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
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <div className="px-1">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/dev">
                              <div className="card hover:ring-1 ring-dark-200 dark:ring-light-800 transition-all view-anchor !mt-0">
                                <img
                                  src="https://i.imgur.com/AOOqa0N.jpg"
                                  className="rounded-lg w-full h-24 object-cover"
                                  alt=""
                                />
                                <div className="mask bg-dark-500/[.4]"></div>
                                <Link
                                  href="/dev"
                                  className="card-img-overlay flex flex-col justify-end"
                                >
                                  <h4 className="text-lg text-light-500 font-semibold tracking-wider leading-normal">
                                    Projetos - Dev
                                  </h4>
                                </Link>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/arts">
                              <div className="card hover:ring-1 ring-dark-200 dark:ring-light-800 transition-all view-anchor !mt-0">
                                <img
                                  src="/images/ultimate-mercer-thumb.jpg"
                                  className="rounded-lg w-full h-24 object-cover"
                                  alt=""
                                />
                                <div className="mask bg-dark-500/[.4]"></div>
                                <Link
                                  href="/arts"
                                  className="card-img-overlay flex flex-col justify-end"
                                >
                                  <h4 className="text-lg text-light-500 font-semibold tracking-wider leading-normal">
                                    Projetos - Arts
                                  </h4>
                                </Link>
                              </div>
                            </a>
                          </NavigationMenuLink>
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
      </nav>
    </header>
  );
};

export default NavigationBar;
