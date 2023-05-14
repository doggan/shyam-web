import React, { useEffect, useState } from 'react';
import SectionTitle from './section-title';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TechTag, { TechName } from './tech-tag';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export interface IExperienceProps {
  items: IWorkItem[];
}

export interface IWorkItem {
  companyName: string;
  dates: string;
  position: string;
  location: string;
  logoImageName: string;
  description: string;
  techNames: TechName[];
  imageNames?: string[];

  // If true, a 'load more' button will be added after this entry
  // to load more items.
  addLoadMoreButtonAfter?: boolean;
}

interface IWorkIcon {
  companyName: string;
  logoImage: string;
}

function WorkIcon({ companyName, logoImage }: IWorkIcon) {
  return (
    <Image
      className="rounded-full"
      src={logoImage}
      width={60}
      height={60}
      alt={companyName + ' logo'}
    />
  );
}

function AddIcon() {
  return <FontAwesomeIcon icon={faPlus} />;
}

function getTimelineElement(item: IWorkItem) {
  return (
    <VerticalTimelineElement
      key={item.companyName}
      textClassName="vertical-timeline-element-content--custom"
      dateClassName="vertical-timeline-element-date--custom"
      contentStyle={{ background: '#fafafa', color: '#000' }}
      date={item.dates}
      icon={
        <WorkIcon
          companyName={item.companyName}
          logoImage={item.logoImageName}
        />
      }
    >
      <h3 className="vertical-timeline-element-title text-xl font-semibold">
        {item.companyName}
      </h3>
      <h4 className="vertical-timeline-element-subtitle italic">
        {item.position}
      </h4>
      <h4 className="vertical-timeline-element-subtitle text-xs">
        {item.location}
      </h4>
      <h4 className="py-2 text-sm whitespace-pre-wrap">{item.description}</h4>

      {/* TODO: figure out if we really need to show images here; it's too cramped */}
      {/* {item.imageNames && item.imageNames.length > 0 && (
      // <div className="snap-x scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-100 flex w-full overflow-x-auto gap-2">
      //   {item.imageNames.map((imageName) => (
      //     <Image
      //       key={imageName}
      //       className="rounded-sm snap-center flex-0 h-40 w-100"
      //       src={imageName}
      //       width={240}
      //       height={120}
      //       alt={imageName}
      //     />
      //   ))}
      // </div>
      // <div className="grid grid-cols-3">
      // {item.imageNames.map((imageName) => (
      //   <Image
      //     key={imageName}
      //     className="rounded-sm"
      //     src={imageName}
      //     width={120}
      //     height={120}
      //     alt={imageName}
      //   />
      // ))}
      // </div>
    )} */}

      <div>
        {item.techNames.map((techName) => (
          <TechTag key={`${item.companyName}-${techName}`} name={techName} />
        ))}
      </div>
    </VerticalTimelineElement>
  );
}

function getNextBatchCount(items: IWorkItem[], startIndex: number): number {
  let endIndex = items.findIndex((item, index) => {
    return index >= startIndex && item.addLoadMoreButtonAfter;
  });

  if (endIndex === -1) {
    endIndex = items.length;
  } else {
    endIndex++;
  }

  return endIndex - startIndex;
}

export default function Experience({ items }: IExperienceProps) {
  const [counter, setCounter] = useState(0);
  const [activeItems, setActiveItems] = useState(() => {
    const startIndex = 0;
    const loadCount = getNextBatchCount(items, startIndex);

    setCounter(loadCount);

    return items
      .slice(startIndex, startIndex + loadCount)
      .map((item) => getTimelineElement(item));
  });

  // Handle updating our internal state if any of the items change.
  // This should normally only happen in dev with hotreload.
  useEffect(() => {
    setActiveItems(
      items.slice(0, counter).map((item) => getTimelineElement(item)),
    );
  }, [items]);

  const loadMore = () => {
    const startIndex = counter;
    const loadCount = getNextBatchCount(items, startIndex);

    const newItems = [
      items
        .slice(startIndex, startIndex + loadCount)
        .map((item) => getTimelineElement(item)),
    ];

    setActiveItems((oldItems) => [...oldItems, newItems]);
    setCounter(startIndex + loadCount);
  };

  const showLoadMore = counter < items.length;

  return (
    <section id="experience" className="bg-white">
      <SectionTitle title="Experience" />
      <VerticalTimeline lineColor="#eee">
        {activeItems}

        {showLoadMore && (
          <VerticalTimelineElement
            iconOnClick={loadMore}
            iconClassName="vertical-timeline-element-icon--button"
            icon={<AddIcon />}
          />
        )}
      </VerticalTimeline>
    </section>
  );
}
