"use client";

import {
  Globe,
  Envelope,
  GithubLogo,
  BehanceLogo,
  MediumLogo,
  LinkedinLogo,
  Browser,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getExperiences, user } from "services";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { allAcademics } from "contentlayer/generated";
import { techs, links } from "services";
import { Badge } from "@/components/ui/badge";
import { FormatMonthYear } from "@/components/date-format";

export default function Home() {
  const experiences = getExperiences;
  const educations = allAcademics;

  return (
    <>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-5 print:space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="max-w-md text-pretty font-mono text-xl">
                {user.role}
              </p>
              <div className="max-w-md items-center text-pretty font-mono">
                {user.locationLink ? (
                  <a
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                    href={user.locationLink}
                    target="_blank"
                  >
                    <Globe size={16} />
                    {user.location}
                  </a>
                ) : (
                  <span className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline">
                    <Globe size={16} />
                    {user.location}
                  </span>
                )}
              </div>
              <div className="flex print:flex-col gap-x-1 font-mono text-sm !mt-0.5">
                {user.social.email && (
                  <>
                    <Button
                      className="print:hidden"
                      variant="outline"
                      size={"icon"}
                      asChild
                    >
                      <a
                        href={`mailto:${user.social.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Acessar e-mail"
                      >
                        <Envelope size={20} />
                      </a>
                    </Button>
                    <a
                      href={`mailto:${user.social.email}`}
                      className="hidden print:flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Envelope size={24} className="mr-1" />
                      {user.social.email}
                    </a>
                  </>
                )}

                {user.social.website && (
                  <a
                    href="http://ultimatemercer.com"
                    className="hidden print:flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Browser size={24} className="mr-1" />
                    https://ultimatemercer.com/
                  </a>
                )}

                {user.social.github && (
                  <>
                    <Button
                      className="print:hidden"
                      variant="outline"
                      size={"icon"}
                      asChild
                    >
                      <a
                        href={user.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Acessar Github"
                      >
                        <GithubLogo size={20} />
                      </a>
                    </Button>
                    <a
                      href={`${user.social.github}`}
                      className="hidden print:flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubLogo size={24} className="mr-1" />
                      {user.social.github}
                    </a>
                  </>
                )}

                {user.social.linkedin && (
                  <>
                    <Button
                      className="print:hidden"
                      variant="outline"
                      size={"icon"}
                      asChild
                    >
                      <a
                        href={user.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Acessar Linkedin"
                      >
                        <LinkedinLogo size={20} />
                      </a>
                    </Button>
                    <a
                      href={`${user.social.linkedin}`}
                      className="hidden print:flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinLogo size={24} className="mr-1" />
                      {user.social.linkedin}
                    </a>
                  </>
                )}

                {user.social.behance && (
                  <>
                    <Button
                      className="print:hidden"
                      variant="outline"
                      size={"icon"}
                      asChild
                    >
                      <a
                        href={user.social.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Acessar Behance"
                      >
                        <BehanceLogo size={20} />
                      </a>
                    </Button>
                    <a
                      href={`${user.social.behance}`}
                      className="hidden print:flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BehanceLogo size={24} className="mr-1" />
                      {user.social.behance}
                    </a>
                  </>
                )}
                {user.social.medium && (
                  <>
                    <Button
                      className="print:hidden"
                      variant="outline"
                      size={"icon"}
                      asChild
                    >
                      <a
                        href={user.social.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Acessar Medium"
                      >
                        <MediumLogo size={20} />
                      </a>
                    </Button>
                    <a
                      href={`${user.social.medium}`}
                      className="hidden print:flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MediumLogo size={24} className="mr-1" />
                      {user.social.medium}
                    </a>
                  </>
                )}
              </div>
            </div>
            <Avatar className="size-32 rounded-lg mt-2">
              <AvatarImage
                src={user.avatar}
                alt={user.name}
                className="rounded-lg"
              />
              <AvatarFallback className={"!rounded-lg font-bold text-xl"}>
                {user.initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <article className="flex min-h-0 flex-col gap-y-1">
            <h2 className="text-2xl font-bold">Sobre</h2>
            <p className="text-pretty text-base !font-mono">
              Atualmente sou Desenvolvedor Front-end, tendo experiência
              trabalhando com React e Vue.JS. Em projetos pessoais venho
              praticando com frameworks back-end, como Express e NestJS, com o
              intuito de me tornar um Desenvolvedor FullStack.
            </p>
          </article>
          <article className="flex min-h-0 flex-col gap-y-1.5">
            <h2 className="text-2xl font-bold">Experiências</h2>
            {experiences.map((experience) => (
              <Card
                className="!border-none !shadow-none bg-transparent"
                key={`${experience.company}-${experience.role}`}
              >
                <CardHeader className="!pt-0 !px-0 !pb-0">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex text-xl items-center justify-center gap-x-1 font-semibold leading-none">
                      {experience.company}
                    </h3>
                    <div className="text-sm font-mono text-gray-500 capitalize">
                      {FormatMonthYear(experience.start)}
                      {experience.end
                        ? ` - ${FormatMonthYear(experience.end)}`
                        : " - Em andamento"}
                    </div>
                  </div>

                  <h4 className="font-mono text-base leading-none mt-0">
                    {experience.role}
                  </h4>
                </CardHeader>
                <CardContent className="!px-0 !pb-2 mt-1">
                  {experience.description && (
                    <p className="font-mono text-sm mb-2">
                      {experience.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {experience.tags.length > 0 &&
                      experience.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={"secondary"}
                          className="rounded-md mr-1 print:bg-secondary"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </article>
          <article className="flex min-h-0 flex-col gap-y-1">
            <h2 className="text-2xl font-bold">Habilidades</h2>
            <Card className="!border-none !shadow-none bg-transparent">
              <CardContent className="!px-0 !pb-2">
                <div className="flex flex-wrap gap-1">
                  {techs.map((tech) => (
                    <Badge
                      key={tech.name}
                      className="rounded-md print:text-dark-500 mr-1"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </article>
          <article className="flex min-h-0 flex-col gap-y-1">
            <h2 className="text-2xl font-bold">Educação</h2>
            {educations.map((education) => (
              <Card
                className="!border-none !shadow-none bg-transparent"
                key={`${education.course}`}
              >
                <CardHeader className="!pt-0 !px-0 !pb-2">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex text-xl items-center justify-center gap-x-1 font-semibold leading-none">
                      {education.institute}
                    </h3>
                  </div>
                  <h4 className="font-mono text-base leading-none !mt-2">
                    {education.course}
                  </h4>
                  <p className="font-mono text-sm !mt-0 mb-2">
                    {education.status}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
