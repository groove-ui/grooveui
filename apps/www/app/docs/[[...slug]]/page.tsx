// import { Mdx } from "@/components/mdx-components";
import { MDXContent } from "@/components/MDXContent";
import { allDocs } from "contentlayer/generated";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  return doc || null;
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocsPages({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    // Handle Error Page Here
    return (
      <main>
        <h1 className="text-lg">Document not found</h1>
        <p>The document you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main>
      <header className="mb-8">
        <h1 className="text-4xl mb-2">{doc.title}</h1>
        <p>{doc.description}</p>
      </header>
      <MDXContent code={doc.body.code} />
      {/* <Mdx code={doc.body.code} /> */}
    </main>
  );
}
