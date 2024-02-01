import Link from "next/link";
import AuthorInfo from "../article-related/author-info";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const FullpageLayout = ({ doc, authordetails, next, prev, children }: any) => {
  const { authors, slug, fileName, date, title, tags } = doc;

  const typography = doc.typography && `${doc.typography}-article`;

  return (
    <>
      <section className="two-column-article">
        <div className="info-article">
          <div className="sticky-content hover:hover-header">
            <img
              src={doc.cover ? doc.cover : doc.imageHeader}
              className={`info-article-image ${doc.filter}`}
              alt={`${title} image`}
            />
            <div className="info-article-overlay">
              <div className="flex h-full flex-col justify-end">
                <h5 className="article-meta">
                  <span className="bg-dark-500 p-1 rounded-sm text-light-500">
                    <span className="marker-line">
                      <FormatFullTimeStamp date={date} />
                    </span>
                  </span>
                </h5>
                <h1 className="md:text-4xl text-3xl font-extrabold tracking-wide !leading-normal mb-2">
                  <span className="marker-line bg-dark-500 !py-1 !px-3 rounded-sm text-light-500">
                    {title}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content-article">
          <div
            className={`tc-article-grid prose !pb-8 dark:prose-dark ${
              typography && typography
            }`}
          >
            {children}
            {doc.gallery && doc.gallery.length > 0 && (
              <div>
                <h3 className="rounded-md mb-4 bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
                  <span className="marker-line !py-2 !px-3">Galeria:</span>
                </h3>
                <ScrollArea className="h-full w-full p-4">
                  <div className="table min-w-full">
                    <div className="flex gap-5 pb-4">
                      {doc.gallery.map((image, index) => (
                        <Link
                          href={image}
                          target="_blank"
                          key={index}
                          className="contents"
                        >
                          <img
                            src={image}
                            className="max-w-full object-cover mx-auto"
                            alt={`${title} image ${index}`}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            )}
            {tags && tags.length > 0 && (
              <>
                <h4 className="text-2xl font-bold mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: any) => (
                    <Badge key={tag} className="!rounded-md ">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="tc-article-grid mb-4">
            <h3 className="mb-4 bg-dark-500 rounded-sm text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
              <span className="marker-line !py-2 !px-3">Escrito por:</span>
            </h3>
            {authordetails.map((author: any, index: any) => (
              <AuthorInfo
                key={author.name}
                author={author}
                quote={authors[index].quote}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FullpageLayout;
