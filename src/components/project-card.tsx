import Image from 'next/image';
import TechTag, { TechName } from './tech-tag';

interface IProjectCardProps {
  name: string;
  tags: TechName[];
  imageName: string;
}

export function ProjectCard({ name, tags, imageName }: IProjectCardProps) {
  const renderedTags = tags.map((tag) => {
    return <TechTag key={tag} name={tag} />;
  });

  return (
    <div className="snap-center shrink-0 p-1">
      <div className="relative">
        <Image
          className="rounded"
          src={imageName}
          width={320}
          height={200}
          alt={name}
        />
        <div className="absolute w-full bg-black bg-opacity-40 bottom-0 p-1">
          <p className="text-white">{name}</p>

          <div className="gap-1">{renderedTags}</div>
        </div>
      </div>
    </div>
  );
}
