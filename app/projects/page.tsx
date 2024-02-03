import * as React from "react";

import { getDocuments } from "services";

async function getData() {
  const data = await getDocuments();
  return data;
}

import type { Metadata } from "next";
import ListProjects from "@/components/list-projects";

export const metadata: Metadata = {
  title: "Projetos",
};

export default async function page() {
  const displayDocuments = await getData();

  return (
    <main className="container-fluid py-6 px-5">
      <h1 className="text-4xl text-center font-bold mb-5 ">Projetos</h1>
      <ListProjects projects={displayDocuments} />
    </main>
  );
}
