"use client";
import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDebounce, useDebouncedCallback } from "use-debounce";

import { Skeleton } from "@/components/ui/skeleton";
import { CardBackground } from "@/components/card/background";

const ListProjects = ({ projects }) => {
  const initialState = [...projects];
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);
  const [displayDocuments, setDisplayDocuments] = React.useState<any[]>([]);

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

  const search = watch("search");

  const onSubmit = (value: z.infer<typeof searchSchema>) => {
    const { search } = value;
  };

  const filterProjects = useDebouncedCallback((search) => {
    if (search) {
      const projects = [...initialState];
      const data = projects.filter((doc) => {
        const searchContent = doc.document.title;
        return searchContent.toLowerCase().includes(search.toLowerCase());
      });
      setDisplayDocuments(data);
      setIsLoading(false);
    } else {
      setDisplayDocuments(initialState);
      setIsLoading(false);
    }
  }, 1000);

  React.useEffect(() => {
    filterProjects(search);
  }, [search]);

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 pb-8 md:space-y-5">
          <div className="flex justify-center mb-4">
            <div className="relative max-w-lg flex-1">
              <input
                {...register("search")}
                aria-label="Pesquisar projetos"
                type="text"
                placeholder="Pesquisar projetos"
                className="block w-full rounded-sm border border-gray-300 bg-light-500 px-4 py-2 text-dark-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
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

      {isLoading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col space-y-3 my-5">
              <Skeleton className="!bg-dark-100 dark:!bg-muted h-6 w-16 rounded-md" />
              <Skeleton className="!bg-dark-100 dark:!bg-muted h-96 w-full rounded-md" />
              <div className="space-y-2">
                <Skeleton className="!bg-dark-100 dark:!bg-muted h-8 w-full" />
                <Skeleton className="!bg-dark-100 dark:!bg-muted h-4 w-[200px] rounded-md" />
                <Skeleton className="!bg-dark-100 dark:!bg-muted h-4 w-[160px]  rounded-md" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="!bg-dark-100 dark:!bg-muted h-12 w-12 rounded-full" />
                <Skeleton className="!bg-dark-100 dark:!bg-muted h-8 w-20 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && displayDocuments.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayDocuments.map((article: any) => (
            <CardBackground
              key={article.document.title}
              document={article.document}
              authors={article.authordetails}
              isFeatured
            />
          ))}
        </div>
      )}
      {!isLoading && displayDocuments.length === 0 && (
        <h1 className="text-center font-bold text-7xl my-14">
          Nenhum projeto encontrado!
        </h1>
      )}
    </section>
  );
};
export default ListProjects;
