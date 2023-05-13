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
}

interface IWorkIcon {
  companyName: string;
  logoImage: string;
}

function WorkIcon({ companyName, logoImage }: IWorkIcon) {
  return (
    <Image
      className="rounded-full"
      src={'/images/' + logoImage}
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
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date={item.dates}
        iconStyle={{ background: '#fff', color: '#fff' }}
        icon={
          <WorkIcon
            companyName={item.companyName}
            logoImage={item.logoImageName}
          />
        }
        // iconOnClick={() => window.open("https://www.tracehq.com/")}
      >
        <h3 className="vertical-timeline-element-title">{item.companyName}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
        <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
        <p>{item.description}</p>
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
