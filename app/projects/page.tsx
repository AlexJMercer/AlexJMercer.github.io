import * as React from "react";

import { CardBackground } from "@/components/card/background";

import { getDocuments } from "services";
import SearchInput from "./search-input";

async function getData(query = "") {
  const data = await getDocuments();
  if (query) {
    const filteredDocuments = data.filter((frontmatter) => {
      const searchContent =
        frontmatter.document.title + frontmatter.document.description;
      return searchContent.toLowerCase().includes(query.toLowerCase());
    });
    return filteredDocuments;
  }
  return data;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
};

export default async function page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  const displayDocuments = await getData(query);

  return (
    <main className="container-fluid py-6 px-5">
      <h1 className="text-4xl font-bold mb-5 ">Projetos</h1>

      <SearchInput />

      {displayDocuments && displayDocuments.length > 0 && (
        <>
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
        </>
      )}

      {displayDocuments.length === 0 && (
        <h1 className="text-center font-bold text-7xl my-14">
          Nenhum projeto encontrado!
        </h1>
      )}
    </main>
  );
}
