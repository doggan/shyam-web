import { TechName } from './tech-tag';
import SectionTitle from './section-title';
import { ProjectCard } from './project-card';

export interface IProjectProps {
  items: IProjectItem[];
}

export interface IProjectItem {
  projectName: string;
  techNames: TechName[];
  imageName: string;
  description?: string;
  year?: string;
  url?: string;
}

export default function Projects({ items }: IProjectProps) {
  const renderedProjects = items.map((item) => {
    return <ProjectCard key={item.projectName} item={item} />;
  });

  return (
    <section id="projects" className="bg-white">
      <SectionTitle title="Projects" />

      <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderedProjects}
      </div>
    </section>
  );
}
