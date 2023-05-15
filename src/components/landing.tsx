import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Obfuscate from 'react-obfuscate';

interface ILandingProps {
  email: string;
  githubUrl: string;
  linkedInUrl: string;
}

export default function Landing({
  email,
  githubUrl,
  linkedInUrl,
}: ILandingProps) {
  return (
    <section
      id="home"
      className="top-0 w-full h-screen bg-landing bg-center bg-cover"
    >
      <div className="relative h-full w-full text-center">
        <div className="absolute top-[8%] inset-x-0 font-bold text-6xl text-white drop-shadow-lg">
          Hello. 👋
        </div>
        <div className="absolute bottom-[4%] inset-x-0 text-white drop-shadow-lg">
          <p className="font-bold text-5xl">I&#39;m Shyam.</p>
          <p className="tracking-wide font-light text-lg pt-2 pb-4">
            I&#39;m a Full-Stack Software Engineer.
          </p>
          <ul className="flex justify-center text-3xl pb-5">
            <li className="px-4">
              <a
                className="hover:text-sky-600"
                href={linkedInUrl}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="px-4">
              <a
                className="hover:text-sky-600"
                href={githubUrl}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="px-4">
              <Obfuscate
                className="hover:text-sky-600"
                email={email}
                aria-label="Email Me"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Obfuscate>
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              href="#experience"
              scroll={false}
              className="hover:bg-sky-600 text-white border-solid border-2 border-white w-[48px] h-[48px] block rounded-full"
            >
              <FontAwesomeIcon
                className="text-2xl pt-[10px]"
                icon={faChevronDown}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
