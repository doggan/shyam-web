import SectionTitle from './section-title';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TechTag, { TechName } from './tech-tag';
import Image from 'next/image';

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

export default function Experience({ items }: IExperienceProps) {
  const renderedWorkItems = items.map((item) => {
    return (
      <VerticalTimelineElement
        key={item.companyName}
        // className={styles["vertical-timeline-element--work"]}
        // className={styles["abc"]}
        // className="vertical-timeline-element--work"
        contentStyle={{ background: '#fafafa', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(250, 250, 250)' }}
        date={item.dates}
        // iconStyle={{ background: '#fff', color: '#fff' }}
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
        <p>{item.description}</p>

        {item.imageNames && item.imageNames.length > 0 && (
          <div className="grid grid-cols-3">
            {item.imageNames.map((imageName) => (
              <Image
                key={imageName}
                className="rounded-sm"
                src={imageName}
                width={120}
                height={120}
                alt={imageName}
              />
            ))}
          </div>
        )}

        <div>
          {item.techNames.map((techName) => (
            <TechTag key={`${item.companyName}-${techName}`} name={techName} />
          ))}
        </div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="experience" className="bg-white">
      <SectionTitle title="Experience" />
      <VerticalTimeline
        lineColor="#eee"
        // className={styles["vertical-timeline.vertical-timeline-custom-line"]}
      >
        {renderedWorkItems}
      </VerticalTimeline>
    </section>
  );
}
