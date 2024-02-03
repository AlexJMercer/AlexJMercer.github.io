"use client";

import { getExperiences, techs } from "services";
import { allAcademics } from "contentlayer/generated";
import { FormatMonthYear } from "@/components/date-format";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = () => {
  const experiences = getExperiences;
  const educations = allAcademics;

  return (
    <section className="container py-6">
      <Tabs defaultValue="experiences" className="w-full">
        <TabsList className="!glass dark:!dark-glass !rounded-sm mb-2">
          <TabsTrigger value="experiences">Experiências</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
          <TabsTrigger value="education">Educação</TabsTrigger>
        </TabsList>
        <TabsContent
          className="!glass dark:!dark-glass !rounded-sm"
          value="experiences"
        >
          <div className="px-5 py-4">
            <h1 className="text-3xl font-bold mb-4">Experiências</h1>
            <div className="flex min-h-0 flex-col gap-y-4 px-2">
              {experiences.map((experience) => (
                <Card
                  className="!border-none !shadow-none bg-transparent my-1"
                  key={`${experience.company}-${experience.role}`}
                >
                  <CardHeader className="!pt-0 !px-0 !pb-0">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex text-2xl items-center justify-center gap-x-1 font-semibold leading-none">
                        {experience.company}
                      </h3>
                      <div className="text-sm font-mono text-gray-500 capitalize">
                        {FormatMonthYear(experience.start)}
                        {experience.end
                          ? ` - ${FormatMonthYear(experience.end)}`
                          : " - Em andamento"}
                      </div>
                    </div>

                    <h4 className="font-mono text-lg leading-none mt-0">
                      {experience.role}
                    </h4>
                  </CardHeader>
                  <CardContent className="!px-0 !pb-2">
                    {experience.description && (
                      <p className="font-mono text-base mb-2">
                        {experience.description}
                      </p>
                    )}
                    {experience.tags.length > 0 &&
                      experience.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={"secondary"}
                          className="rounded-md text-[14px] mr-1 print:bg-secondary"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent
          className="!glass dark:!dark-glass !rounded-sm"
          value="skills"
        >
          <div className="px-5 py-4">
            <h1 className="text-3xl font-bold mb-4">Habilidades</h1>
            <div className="flex min-h-0 flex-col gap-y-4 px-2">
              <Card className="!border-none !shadow-none bg-transparent">
                <CardContent className="!px-0 !pb-2 flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech.name}
                      variant={"outline"}
                      className="!pl-0 !py-0 !pr-5 text-lg print:text-dark-500 my-1 mr-1 rounded-sm"
                    >
                      <Avatar className="mr-4 rounded-s-none rounded-e-sm size-16 ">
                        <AvatarImage
                          src={tech.imageUrl}
                          className=" size-16 object-cover"
                        />
                        <AvatarFallback>{tech.name}</AvatarFallback>
                      </Avatar>
                      {tech.name}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          className="!glass dark:!dark-glass !rounded-sm"
          value="education"
        >
          <div className="px-5 py-4">
            <h1 className="text-3xl font-bold mb-4">Educação</h1>
            <div className="flex min-h-0 flex-col gap-y-4 px-2">
              {educations.map((education) => (
                <div
                  key={`${education.course}`}
                  className="flex items-center mb-2"
                >
                  <Avatar className="size-16 rounded-md mr-2">
                    <AvatarImage
                      src={education.image}
                      className="object-cover"
                    />
                    <AvatarFallback>{education.institute}</AvatarFallback>
                  </Avatar>
                  <Card className="!border-none !shadow-none bg-transparent">
                    <CardHeader className="!py-0 !px-0">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex text-xl items-center justify-center gap-x-1 font-semibold leading-none mb-1">
                          {education.institute}
                        </h3>
                      </div>
                      <h4 className="font-mono text-base leading-none !mt-0">
                        {education.course}
                      </h4>
                      <p className="font-mono text-sm !mt-0 mb-2">
                        {education.status}
                      </p>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default experiences;
