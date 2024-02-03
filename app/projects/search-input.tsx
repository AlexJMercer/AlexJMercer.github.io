"use client";
import * as React from "react";
import * as z from "zod";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const SearchInput = ({ documents }: any) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchSchema = z.object({
    search: z.string(),
  });

  const { handleSubmit, register, watch } = useForm<
    z.infer<typeof searchSchema>
  >({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  const [search, setSearch] = React.useState<string | null>(watch("search"));

  const onSubmit = (value: z.infer<typeof searchSchema>) => {
    const { search } = value;
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  React.useEffect(() => {
    const search = watch("search");
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [watch("search")]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 pb-8 md:space-y-5">
          <div className="flex justify-center mb-4">
            <div className="relative max-w-lg flex-1">
              <input
                {...register("search")}
                defaultValue={searchParams.get("query")?.toString()}
                aria-label="Pesquisar projetos"
                type="text"
                placeholder="Pesquisar projetos"
                className="block w-full rounded-md border border-gray-300 bg-light-500 px-4 py-2 text-dark-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
