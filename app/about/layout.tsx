import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
