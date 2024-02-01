import Link from "next/link";
import AuthorInfo from "../article-related/author-info";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const BasicLayout = ({ doc, authordetails, next, prev, children }) => {
  const { authors, slug, fileName, date, title, tags } = doc;

  const typography = doc.typography && `${doc.typography}-article`;

  return (
    <section className="main-article">
      <div className="header-basic">
        <div className="header-basic-content">
          <h5 className="article-meta">
            <span className="marker-line rounded-sm bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500">
              <FormatFullTimeStamp date={date} />
            </span>
          </h5>
          <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide !leading-normal mb-4">
            <span className="marker-line rounded-sm bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500">
              {title}
            </span>
          </h1>
        </div>
        <div className="header-basic-container hover:hover-card">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={doc.cover ? doc.cover : doc.imageHeader}
            />
            <source
              media="(min-width: 769px)"
              srcSet={doc.cover ? doc.cover : doc.imageHeader}
            />
            <img
              src={doc.cover ? doc.cover : doc.imageHeader}
              className={`header-basic-container-image ${doc.filter}`}
              alt={`${title} Image`}
            />
          </picture>
        </div>
      </div>
      <article
        className={`article-grid prose !pb-12 dark:prose-dark ${
          typography && typography
        }`}
      >
        {children}
        {doc.gallery && doc.gallery.length > 0 && (
          <div>
            <h3 className="mb-4 rounded-md bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
              <span className="marker-line rounded-md !py-2 !px-3">
                Galeria:
              </span>
            </h3>
            <ScrollArea className="h-full w-full p-4">
              <div className="table min-w-full">
                <div className="flex gap-5 pb-4">
                  {doc.gallery.map((image: any, index: any) => (
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
      </article>
      <div className="article-grid mb-8">
        <h3 className="mb-4 rounded-sm bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
          <span className="marker-line  !py-2 !px-3">Escrito por:</span>
        </h3>
        {authordetails.map((author, index) => (
          <AuthorInfo
            key={index}
            author={author}
            quote={authors[index].quote}
          />
        ))}
      </div>
    </section>
  );
};

export default BasicLayout;
