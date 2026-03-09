import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IProjectItem } from './projects';

interface IProjectCardProps {
  item: IProjectItem;
}

export function ProjectCard({ item }: IProjectCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const linkIcon = item.url
    ? item.url.includes('//github.com')
      ? faGithub
      : item.url.includes('youtube.com')
        ? faYoutube
        : faExternalLink
    : null;

  return (
    <>
      <li
        ref={ref}
        className={clsx('group flex gap-4 transition-opacity duration-500', {
          'opacity-0': !inView,
          'opacity-100': inView,
        })}
      >
        <img
          src={item.imageName}
          alt={item.projectName}
          width={64}
          height={64}
          className="shrink-0 rounded w-16 h-16 object-cover opacity-80 cursor-pointer hover:opacity-100 transition-opacity"
          onClick={() => setLightboxOpen(true)}
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-900">{item.projectName}</span>
            {linkIcon && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-700"
              >
                <FontAwesomeIcon icon={linkIcon} />
              </a>
            )}
          </div>

          {item.description && (
            <p className="mt-0.5 text-sm text-zinc-600">{item.description}</p>
          )}

          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.techNames.map((name) => (
              <span
                key={name}
                className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-100 rounded"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </li>

      {lightboxOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setLightboxOpen(false)}
          >
            <img
              src={item.imageName}
              alt={item.projectName}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
          </div>,
          document.body,
        )}
    </>
  );
}
