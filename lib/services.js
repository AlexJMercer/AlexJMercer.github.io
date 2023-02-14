import fs from "fs";
import generateRss from "@/lib/generate-rss";
import { formatSlug, getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";

export const DOCS_PER_PAGE = 18;

export const pathName = "projects";

export const fetchDocuments = (docs) => {
  return docs.map(async (document) => {
    const authorList = document.authors;
    const authorPromise = authorList.map(async (author) => {
      const authorResults = await getFileBySlug("authors", [author.name]);
      return authorResults.frontmatter;
    });
    const authordetails = await Promise.all(authorPromise);
    return { document, authordetails };
  });
};

export const initialDisplayDocs = (docs, pageNumber) => {
  let initialDisplayDocuments;
  if (pageNumber) {
    initialDisplayDocuments = docs.slice(
      DOCS_PER_PAGE * (pageNumber - 1),
      DOCS_PER_PAGE * pageNumber
    );
  } else {
    initialDisplayDocuments = docs.slice(0, DOCS_PER_PAGE);
  }

  return initialDisplayDocuments;
};

export const paginationDocs = (docs, pageNumber) => {
  return {
    currentPage: pageNumber ? pageNumber : 1,
    totalPages: Math.ceil(docs.length / DOCS_PER_PAGE),
    totalDocs: docs.length,
  };
};

export const getAllDocuments = async (pageNumber) => {
  const rawDocuments = await getAllFilesFrontMatter(pathName);
  const documents = await Promise.all(fetchDocuments(rawDocuments));
  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);
  const pagination = paginationDocs(documents, pageNumber);

  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getDocument = async (params) => {
  const rawDocuments = await getAllFilesFrontMatter(pathName);
  const allDocuments = await Promise.all(fetchDocuments(rawDocuments));
  const documentIndex = allDocuments.findIndex(
    (data) => formatSlug(data.document.slug) === params.slug.join("/")
  );

  const prev = {
    frontmatter: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].document
      : null,
    authordetails: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].authordetails
      : null,
  };

  const next = {
    frontmatter: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].document
      : null,
    authordetails: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].authordetails
      : null,
  };

  const doc = await getFileBySlug(pathName, params.slug.join("/"));

  const authorList = doc.frontmatter.authors;
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author.name]);
    return authorResults.frontmatter;
  });
  const authordetails = await Promise.all(authorPromise);

  if (rawDocuments.length > 0) {
    const rss = generateRss(rawDocuments);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  return { props: { doc, authordetails, prev, next } };
};

export const getAllDocumentsByChannel = async (channel, pageNumber) => {
  const rawDocuments = await getAllFilesFrontMatter(pathName);

  const filteredDocuments = rawDocuments.filter(
    (doc) => doc.channel === channel
  );

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getAllDocumentsByCategory = async (category, pageNumber) => {
  const rawDocuments = await getAllFilesFrontMatter(pathName);

  const filteredDocuments = rawDocuments.filter(
    (doc) => doc.category === category
  );

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getAllDocumentsByTag = async (tag, pageNumber) => {
  const rawDocuments = await getAllFilesFrontMatter(pathName);

  const filteredDocuments = rawDocuments.filter((doc) =>
    doc.tags.includes(tag)
  );

  const documents = await Promise.all(fetchDocuments(filteredDocuments));
  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};
