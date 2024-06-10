import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

export type ProjectType = 'Web UI/UX' | 'Mobile UI/UX' | 'Frontend' | 'Backend' | 'Mobile';

export interface Project {
  url?: string;
  title: string;
  description: string;
  types?: ProjectType[];
  repository?: string;
}

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  // Konversi tipe types dari string[] menjadi ProjectType[]
  const projectWithType: Project = {
    ...project,
    types: project.types?.map((type: string) => type as ProjectType) || [],
  };

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={projectWithType} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}

// export default async function PostPage({ params }: Props) {
//   const slug = params?.slug;
//   const project = allProjects.find((project) => project.slug === slug);

//   if (!project) {
//     notFound();
//   }

//   const views =
//     (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

//   return (
//     <div className="bg-zinc-50 min-h-screen">
//       <Header project={project} views={views} />
//       <ReportView slug={project.slug} />

//       <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
//         <Mdx code={project.body.code} />
//       </article>
//     </div>
//   );
// }
