import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { IProjectItem } from './projects';

interface IProjectCardProps {
  item: IProjectItem;
}

export function ProjectCard({ item }: IProjectCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const nameEl = item.url ? (
    <a
      className="font-medium text-zinc-900 group-hover:underline"
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      {item.projectName}
    </a>
  ) : (
    <span className="font-medium text-zinc-900">{item.projectName}</span>
  );

  return (
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
        className="shrink-0 rounded w-16 h-16 object-cover opacity-80"
      />

      <div className="min-w-0">
        {nameEl}

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
  );
}
