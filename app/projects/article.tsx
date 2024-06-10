import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	project: Project;
	views: number;
};

const getTypeClassNames = (types: string[]): string => {
	const typeClassMap: Record<string, string> = {
		"Web UI/UX": "bg-blue-500 text-white",
		"Mobile UI/UX": "bg-green-500 text-white",
		Frontend: "bg-yellow-500 text-white",
		Backend: "bg-red-500 text-white",
		Mobile: "bg-purple-500 text-white",
	};

	return types
		.map((type) => {
			if (type in typeClassMap) {
				return typeClassMap[type];
			}
			return ""; // Or you can skip default class if type is not found
		})
		.join(" ");
};

export const Article: React.FC<Props> = ({ project, views }) => {

	const featuredWithType = {
		...project,
		types: project.types?.map((type: string) => type) || [],
	};
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<div className="mt-4 flex flex-wrap gap-2">
                  {featuredWithType.types?.map((type, index) => (
                    <h4
                      key={index}
                      className={`font-bold text-md px-3 py-1 inline-block rounded ${getTypeClassNames(
                        [type]
                      )}`}
                    >
                      {type}
                    </h4>
                  ))}
                </div>
				<div className="mt-4 flex flex-wrap gap-2">
                  {featuredWithType.types?.map((type, index) => (
                    <h4
                      key={index}
                      className={`font-bold text-md px-3 py-1 inline-block rounded ${getTypeClassNames(
                        [type]
                      )}`}
                    >
                      {type}
                    </h4>
                  ))}
                </div>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
