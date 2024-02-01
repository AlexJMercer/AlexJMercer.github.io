import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiências",
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
