import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { formatSlug, getFiles } from "@/lib/mdx";
import { getDocument } from "@/lib/services";

const DEFAULT_LAYOUT = "BasicLayout";

export async function getStaticPaths() {
  const documents = getFiles("projects");
  console.log(
    documents.map((p: any) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    }))
  );
  return {
    paths: documents.map((p: any) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  console.log("Line 20:", params);
  return getDocument(params);
}

const Project = ({ doc, authordetails, prev, next }: any) => {
  const { mdxSource, toc, frontmatter } = doc;
  return (
    <>
      {frontmatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontmatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontmatter={frontmatter}
          authordetails={authordetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <h1 className="text-5xl">
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Project;
