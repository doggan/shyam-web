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
  return (
    <section className="bg-white">
      <SectionTitle title="Projects" />

      <ul className="max-w-2xl mx-auto px-6 pb-12 space-y-6">
        {items.map((item) => (
          <ProjectCard key={item.projectName} item={item} />
        ))}
      </ul>
    </section>
  );
}
