import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Landing from '@/components/landing';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PROJECT_ITEMS,
  WORK_ITEMS,
} from '@/components/data';

export default function App() {
  return (
    <>
      <NavBar />

      <main>
        <Landing
          email={EMAIL}
          githubUrl={GITHUB_URL}
          linkedInUrl={LINKEDIN_URL}
        />

        {/* TODO: for now, just adding some padding here to account for the fixed navbar on scroll.
        If I change the navbar behavior, or change the scrolling logic to account for offset, I can get rid
        of this */}

        <div className="pt-[30px] bg-white" id="experience">
          <Experience items={WORK_ITEMS} />
        </div>
        <hr className="border-zinc-100 " />
        <div className="pt-[30px] bg-white" id="projects">
          <Projects items={PROJECT_ITEMS} />
        </div>
      </main>

      <Footer email={EMAIL} githubUrl={GITHUB_URL} linkedInUrl={LINKEDIN_URL} />
    </>
  );
}
