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
}

export default function Projects({ items }: IProjectProps) {
  const renderedProjects = items.map((item) => {
    return (
      <ProjectCard
        key={item.projectName}
        name={item.projectName}
        tags={item.techNames}
        imageName={item.imageName}
      />
    );
  });

  return (
    <section id="projects" className="bg-white">
      <SectionTitle title="Projects" />

      <div className="grid grid-cols-4">{renderedProjects}</div>
    </section>
  );
}
