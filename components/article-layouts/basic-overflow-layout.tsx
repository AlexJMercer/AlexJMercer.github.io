import Link from "next/link";
import AuthorInfo from "../article-related/author-info";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const BasicOverflowLayout = ({ doc, authordetails, next, prev, children }) => {
  const { authors, slug, fileName, date, title, tags } = doc;

  const typography = doc.typography && `${doc.typography}-article`;

  return (
    <section className="alter-article">
      <div
        className={`alter-article-header hover:hover-header ${doc.filter}`}
        style={{
          backgroundImage: `url(${
            doc.imageHeader ? doc.imageHeader : doc.cover
          })`,
        }}
      ></div>
      <div className="alter-article-block">
        <div className="alter-article-container -mt-96 background-texture bg-light-500 dark:bg-dark-500">
          <div className="alter-article-container-title">
            <h5 className="md:text-2xl text-xl font-medium tracking-wide">
              <FormatFullTimeStamp date={date} />
            </h5>
            <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide !leading-[1.25] mb-4">
              {title}
            </h1>
          </div>
          <article
            className={`alter-article-content prose !pb-12 dark:prose-dark text-xl !leading-normal ${
              typography && typography
            }`}
          >
            {children}
            {doc.gallery && doc.gallery.length > 0 && (
              <>
                <h3 className="text-3xl font-bold rounded-md bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 mb-4">
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
              </>
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
            <div className="my-8">
              <h3 className="rounded-sm text-3xl font-bold bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 mb-4">
                <span className="marker-line !py-2 !px-3">Escrito por:</span>
              </h3>
              {authordetails.map((author, index) => (
                <AuthorInfo
                  key={index}
                  author={author}
                  quote={authors[index].quote}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BasicOverflowLayout;
