import TechTag, { TechName } from './tech-tag';
import SectionTitle from './section-title';

interface IProjectCardProps {
  name: string;
  tags: TechName[];
  // TODO: img
}

export function ProjectCard({ name, tags }: IProjectCardProps) {
  const renderedTags = tags.map((tag) => {
    return <TechTag key={tag} name={tag} />;
  });

  return (
    <div className="snap-center shrink-0 p-1">
      <div className="relative">
        <img
          className="rounded"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=200&q=80"
        />
        <div className="absolute w-full bg-black bg-opacity-40 bottom-0 p-1">
          <p className="text-white">{name}</p>

          <div className="gap-1">{renderedTags}</div>
        </div>
      </div>
    </div>
  );
}

interface IProjectProps {}

export default function Projects(_: IProjectProps) {
  /*
  Experience Projects:
    - Trace
    - Niantic (PGO, Ingress, etc)
    - Evertoon

    // Should these 3 be grouped in a category as to not take up as much prominence as the above 3?
    // They're older...
    - Gree (WoN)
    - Digital Uzu (BD)
    - Konami

    - EA
    - OSC

  Projects:
    - Monday Night Monsters
    - Nimble BMs
    - Shirt vis
    - Artemis C
    - Proc clouds
    - WoW addons
    - SOMs

    - new stuff:
      - kata vis
      - sequence app
      - habit template generator

      - news cloud

      - diablo and associated projects
      - wallpaper alg
      - recurrimg + bot
      - beat drift leaderboard
      - atom lang hdl

      - Grid plot
return <TechTag name={tag} />
*/

  return (
    <section id="projects" className="bg-white">
      <SectionTitle title="Projects" />

      <div className="grid grid-cols-5">
        <ProjectCard
          name="Evertoon"
          tags={[
            TechName.CSharp,
            TechName.Unity,
            TechName.ObjectiveC,
            TechName.Java,
            TechName.Python,
            TechName.Node,
            TechName.AWS,
          ]}
        />
        {/* <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
        <ProjectCard name="Evertoon" />
        <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
        <ProjectCard name="Evertoon" />
        <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
        <ProjectCard name="Evertoon" />
        <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" /> */}
      </div>

      {/* <div className="scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-100 flex w-full overflow-x-auto snap-x">
        <ProjectCard name="Evertoon" />
        <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
      </div>
      <div className="scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-100 flex w-full overflow-x-auto snap-x">
        <ProjectCard name="Project1" />
        <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
      </div>
      <div className="scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-100 flex w-full overflow-x-auto snap-x">
        <ProjectCard name="Project1" />
        <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
      </div>
      <div className="scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-100 flex w-full overflow-x-auto snap-x">
        <ProjectCard name="Project1" />
        <ProjectCard name="Project2" />
        <ProjectCard name="Project3" />
        <ProjectCard name="Project4" />
        <ProjectCard name="Project5" />
        <ProjectCard name="Project6" />
      </div> */}
    </section>
  );
}
