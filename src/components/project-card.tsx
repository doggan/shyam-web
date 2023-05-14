import Image from 'next/image';
import TechTag from './tech-tag';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProjectItem } from './projects';

interface IProjectCardProps {
  item: IProjectItem;
}

export function ProjectCard({ item }: IProjectCardProps) {
  const renderedTags = item.techNames.map((tag) => {
    return <TechTag key={tag} name={tag} />;
  });

  return (
    <div className="p-1">
      <div className="relative flex h-full">
        <Image
          className="rounded grow"
          src={item.imageName}
          width={320}
          height={200}
          alt={item.projectName}
        />
        {item.url && (
          <div className="px-1 pt-1 pb-px absolute top-0 right-0 bg-black bg-opacity-60 rounded">
            <a
              className="hover:text-sky-600 text-white"
              href={item.url}
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-2xl"
                // Use a github icon for repo links. I'm not attempting to support
                // both repo link + app external link for a single project. The touch
                // boxes are too cramped on mobile already and it affects usability.
                icon={
                  item.url.includes('//github.com')
                    ? faGithub
                    : item.url.includes('youtube.com')
                    ? faYoutube
                    : faExternalLink
                }
              />
            </a>
          </div>
        )}
        <div className="absolute w-full bg-black bg-opacity-60 bottom-0 p-1 rounded-b">
          <div>
            <span className="text-white text-lg">{item.projectName}</span>
            {item.year && (
              <span className="text-zinc-200 text-sm">
                &nbsp;/&nbsp;{item.year}
              </span>
            )}
          </div>

          {item.description && (
            <p className="text-white text-xs">{item.description}</p>
          )}

          <div className="gap-1 pt-px">{renderedTags}</div>
        </div>
      </div>
    </div>
  );
}
